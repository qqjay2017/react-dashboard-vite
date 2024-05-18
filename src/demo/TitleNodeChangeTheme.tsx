import { useThemeMode } from "@/lib";
import { Button } from "@/ui";
import React from "react";

export const TitleNodeChangeTheme = (props: any) => {
  const { themeName, setThemeName } = useThemeMode()
  return <div style={{
    display: 'flex',

  }}>
    <p>当前主题{themeName}</p>
    <div>
      <Button onClick={() => {
        setThemeName('jfDarkTheme')
      }}>蓝深色</Button>
      <Button
        onClick={() => {
          setThemeName('jfLightTheme')
        }}
      >蓝亮色</Button>
      <Button
        onClick={() => {
          setThemeName('jfGreenTheme')
        }}
      >绿色</Button>
    </div>
  </div>;
};
