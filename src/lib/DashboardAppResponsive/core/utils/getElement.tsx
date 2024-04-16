import { ComponentType, ReactElement, isValidElement } from "react";
import { isValidElementType } from "react-is";
export const getElement = (
  ElementOrComponent?: ComponentType<any> | ReactElement
) => {
  if (isValidElement(ElementOrComponent)) {
    return ElementOrComponent;
  }

  if (isValidElementType(ElementOrComponent)) {
    const Element = ElementOrComponent as ComponentType<any>;
    return <Element />;
  }

  return null;
};
