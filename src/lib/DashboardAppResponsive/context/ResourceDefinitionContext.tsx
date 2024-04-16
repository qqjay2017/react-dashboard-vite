import { createContext, useContext } from "react";
import { ResourceDefinition, ResourceOptions } from "../core/type";

export type ResourceDefinitions<OptionsType extends ResourceOptions = any> = {
  [name: string]: ResourceDefinition<OptionsType>;
};

export interface ResourceDefinitionContextValue {
  definitions: ResourceDefinitions;
  register: (config: ResourceDefinition) => void;
  unregister: (config: ResourceDefinition) => void;
}

export const ResourceDefinitionContext =
  createContext<ResourceDefinitionContextValue>({
    definitions: {},
    register: () => {},
    unregister: () => {},
  });

export const useResourceDefinitionContext = () =>
  useContext(ResourceDefinitionContext);
