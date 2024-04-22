import { Options, defineConfig } from "tsup";
import { lessLoader } from "esbuild-plugin-less";

const baseConfig: Options = {
  format: ["cjs", "esm"],
  target: "es2016",
  external: ["react", "react-dom", "antd"],
  sourcemap: true,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  treeshake: true,
  injectStyle: false,
  esbuildPlugins: [lessLoader()],
};

export default defineConfig([
  {
    ...baseConfig,
    entry: ["./src/lib/index.ts"],
    outDir: "dist",
  },
  // 主题包,每个主题单独拆包
  {
    ...baseConfig,
    entry: ["./src/themes/jfDarkTheme/index.ts"],
    outDir: "dist/themes/jfDarkTheme",
  },
  {
    ...baseConfig,
    entry: ["./src/themes/jfLightTheme/index.ts"],
    outDir: "dist/themes/jfLightTheme",
  },
  // ui包
  {
    ...baseConfig,
    entry: ["./src/ui/index.ts"],
    outDir: "dist/ui/",
  },
]);
