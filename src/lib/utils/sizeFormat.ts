import React from "react";

export const sizeFormat = (num: number) => {
  if (isNaN(num)) {
    return 0;
  }

  const rounded = num.toFixed(2);
  return parseFloat(rounded);
};
