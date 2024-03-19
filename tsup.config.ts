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

const themes = ["jfDarkTheme", "jfLightTheme"];
/**
 * themes.map((fn) => `./src/lib/themes/${fn}/${fn}.ts`)
 */
export default defineConfig([
  {
    ...baseConfig,
    entry: ["./src/lib/index.ts"],
    outDir: "dist",
  },
  {
    ...baseConfig,
    entry: {
      jfDarkTheme: "./src/lib/themes/jfDarkTheme/jfDarkTheme.ts",
      jfLightTheme: "./src/lib/themes/jfLightTheme/jfLightTheme.ts",
    },
    outDir: "dist/themes",
  },
  {
    ...baseConfig,
    entry: {
      index: "./src/lib/scroll-area/index.ts",
    },
    outDir: "dist/scroll-area",
  },
]);
