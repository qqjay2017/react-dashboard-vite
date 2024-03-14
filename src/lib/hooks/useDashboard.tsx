import { useContext } from "react";
import { DsContext } from "../context/DsContext";

export const useDashboard = () => {
  const context = useContext(DsContext);

  if (!context) {
    throw new Error("useDashboard must be used within a DashboardApp");
  }

  return context;
};
