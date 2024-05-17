import { useThemeMode } from "@/lib";
import React from "react";

export const TitleNodeChildRenderer = (props: any) => {
  const { themeMode,setThemeMode} = useThemeMode()
  return <div>
    <div>当前颜色{themeMode}</div>
    <div onClick={()=>{
      setThemeMode('light')
    }}>明色</div>
    <div
    onClick={()=>{
      setThemeMode('dark')
    }}
    >暗色</div>
  </div>;
};
