import { useState } from "react";
import { DsContext, DsContextType } from "./DsContext";

export const DesignerContextProvider: React.FC<{
  children?: React.ReactNode;
  config: Partial<DsContextType>;
}> = ({ children, config = {} }) => {
  const [globalStatus, setGlobalStatus] = useState<Record<string, any>>({});
  return (
    <DsContext.Provider
      value={{
        ...config,
        globalStatus,
        setGlobalStatus,
      }}
    >
      {children}
    </DsContext.Provider>
  );
};
