1. 主题

```tsx
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
```

```tsx
<ThemeProvider theme={theme}>
  <CustomCheckbox defaultChecked />
</ThemeProvider>
```

```tsx
function DeepChild() {
  const theme = useDashboardTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}
```

2. 响应式字体

```
在 Material-UI 中，`responsiveFontSizes` 是一个函数，用于实现自适应字体大小。它的内部实现基于 `createMuiTheme` 函数。

`createMuiTheme` 函数创建一个自定义的 Material-UI 主题对象，其中包含了样式和配置。`responsiveFontSizes` 函数则基于这个主题对象，通过计算和应用响应式的字体大小来修改主题。

`responsiveFontSizes` 函数的内部实现步骤如下：

1. 首先，它会检查主题对象中是否已经存在 `typography` 属性，如果不存在，则会创建一个默认的 `typography` 对象，并将其添加到主题中。

2. 接下来，函数会检查 `typography` 对象中是否存在 `fontSize` 属性，如果不存在，则会创建一个默认的 `fontSize` 属性，并将其添加到 `typography` 对象中。

3. 然后，函数会根据当前的窗口宽度，计算出一个倍数因子 `factor`，用于调整字体大小。通常情况下，窗口宽度越大，倍数因子越大。

4. 最后，函数会使用 `createMuiTheme` 函数提供的 `responsiveFontSizes` 方法，根据倍数因子 `factor` 来计算并应用新的字体大小。

通过这个过程，`responsiveFontSizes` 函数能够根据窗口宽度自动调整字体大小，以适应不同的屏幕尺寸和设备。

```

1. 主题

入参

```
 <DashboardAppResponsive
      theme={{
        main: "mediumseagreen",
      }}
```

使用方式

```

方式1
const theme = useTheme();
方式2
    const theme1 = useContext(ThemeContext);

方式3
export const TestChildC5 = withTheme((props: PropsWithTheme) => {
  console.log(props.theme, "them");
  return <div>123</div>;
});


```

## 组件文档

```
<DashboardAppResponsive />
```

onLayoutChange
isDraggable
isResizable
resoucreProps
cols
resource
layout

themeProvider
titleChildren

浅色暗色切换
useThemeMode()

系统主题色

```
@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 224 71.4% 4.1%;
        --card: 0 0% 100%;
        --card-foreground: 224 71.4% 4.1%;
        --popover: 0 0% 100%;
        --popover-foreground: 224 71.4% 4.1%;
        --primary: 220.9 39.3% 11%;
        --primary-foreground: 210 20% 98%;
        --secondary: 220 14.3% 95.9%;
        --secondary-foreground: 220.9 39.3% 11%;
        --muted: 220 14.3% 95.9%;
        --muted-foreground: 220 8.9% 46.1%;
        --accent: 220 14.3% 95.9%;
        --accent-foreground: 220.9 39.3% 11%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 20% 98%;
        --border: 220 13% 91%;
        --input: 220 13% 91%;
        --ring: 224 71.4% 4.1%;
        --radius: 0.5rem;
    }

    .dark,
    html[data-theme="dark"] {
        --background: 224 71.4% 4.1%;
        --foreground: 210 20% 98%;
        --card: 224 71.4% 4.1%;
        --card-foreground: 210 20% 98%;
        --popover: 224 71.4% 4.1%;
        --popover-foreground: 210 20% 98%;
        --primary: 210 20% 98%;
        --primary-foreground: 220.9 39.3% 11%;
        --secondary: 215 27.9% 16.9%;
        --secondary-foreground: 210 20% 98%;
        --muted: 215 27.9% 16.9%;
        --muted-foreground: 217.9 10.6% 64.9%;
        --accent: 215 27.9% 16.9%;
        --accent-foreground: 210 20% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 20% 98%;
        --border: 215 27.9% 16.9%;
        --input: 215 27.9% 16.9%;
        --ring: 216 12.2% 83.9%;
    }

}
```
