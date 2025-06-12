import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    typescript({
      lib: ["es2019", "dom", "es5", "es6"],
      target: "es5",
    }),
  ],
  external: ["react", "react-dom"],
};
