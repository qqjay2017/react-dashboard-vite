import { useEffect } from "react";
import { useResourceDefinitionContext } from "../../context/ResourceDefinitionContext";
import { ResourceChildren, ResourceOptions } from "../type";

/**
 * 注册资源
 * @deprecated 暂时先不用做这个复杂
 * @param resources: An array of Resource elements
 * @param permissions: The permissions
 */
export const useRegisterResources = (
  layouts: ResourceOptions[],
  resources: Record<string, ResourceChildren>
) => {
  const { register, unregister } = useResourceDefinitionContext();
  /**
   * 发生变化后,都重新全量注册
   */
  useEffect(() => {
    layouts.forEach((layout) => {
      if (resources[layout.i]) {
        const definition = layout;
        register(definition);
      }
    });
    return () => {
      layouts.forEach((layout) => {
        unregister(layout);
      });
    };
  }, [register, resources, unregister]);
};
