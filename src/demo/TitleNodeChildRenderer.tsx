import { useThemeMode } from "@/lib";
import { Button } from "@/ui";
import React from "react";

export const TitleNodeChildRenderer = (props: any) => {
  const { themeMode, setThemeMode, themeName } = useThemeMode()
  return <div style={{
    display: 'flex',

  }}>
    <p>当前颜色{themeMode}</p>
    <p>当前主题{themeName}</p>
    <div>
      <Button onClick={() => {
        setThemeMode('light')
      }}>明色</Button>
      <Button
        onClick={() => {
          setThemeMode('dark')
        }}
      >暗色</Button>
    </div>
  </div>;
};
