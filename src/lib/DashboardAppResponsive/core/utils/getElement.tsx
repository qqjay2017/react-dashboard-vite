import {
  ComponentType,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";
import { isValidElementType } from "react-is";
export const getElement = (
  ElementOrComponent?: ComponentType<any> | ReactElement,
  propsInject = {}
) => {
  if (isValidElement(ElementOrComponent)) {
    return cloneElement(ElementOrComponent, propsInject);
  }

  if (isValidElementType(ElementOrComponent)) {
    const Element = ElementOrComponent as ComponentType<any>;

    return <Element {...propsInject} />;
  }

  return null;
};
