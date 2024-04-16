import { useCallback, useMemo, useState } from "react";
import { ResourceChildren, ResourceDefinition } from "../core/type";
import {
  ResourceDefinitionContext,
  ResourceDefinitions,
} from "./ResourceDefinitionContext";

import { isEqual } from "lodash-es";
export const ResourceDefinitionContextProvider = ({
  definitions: defaultDefinitions = {},
  children,
}: {
  definitions?: ResourceDefinitions;
  children: ResourceChildren;
}) => {
  const [definitions, setState] =
    useState<ResourceDefinitions>(defaultDefinitions);

  // 往definitions 里面加一个
  const register = useCallback((config: ResourceDefinition) => {
    setState((prev) =>
      isEqual(prev[config.i], config)
        ? prev
        : {
            ...prev,
            [config.i]: config,
          }
    );
  }, []);
  // 移除一个
  const unregister = useCallback((config: ResourceDefinition) => {
    setState((prev) => {
      const { [config.i]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const contextValue = useMemo(
    () => ({ definitions, register, unregister }),
    [definitions] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return (
    <ResourceDefinitionContext.Provider value={contextValue}>
      {/*在这里需要进行类型转换，因为Provider只接受ReactNode类型，但我们可能会有一个渲染函数。*/}
      {children as React.ReactNode}
    </ResourceDefinitionContext.Provider>
  );
};
