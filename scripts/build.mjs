import esbuild from "esbuild";
import { customPlugin } from "./customPlugin.mjs";
import stylexPlugin from "@stylexjs/esbuild-plugin";

async function build() {
  await Promise.all([
    buildJs()
      .then(() => {
        console.log("✅ Build JS complete");
      })
      .catch((err) => {
        console.log(err);
        console.error("💣 Error building JS");
      }),
  ]);

  console.log("🎉 Build complete");
}

async function buildJs() {
  esbuild.build({
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outdir: "public/dist",
    splitting: true,
    format: "esm",
    plugins: [
      stylexPlugin({
        dev: false,
        generatedCSSFileName: "public/dist/out.css",
      }),
      customPlugin({ dev: false }),
    ],
    loader: {
      ".png": "file",
    },
  });
}

build();
