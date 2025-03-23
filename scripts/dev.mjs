import esbuild from "esbuild";
import { customPlugin } from "./customPlugin.mjs";

function buildJs() {
  console.log("✅ Starting development server");
  esbuild
    .context({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      outdir: "public",
      splitting: true,
      format: "esm",
      plugins: [customPlugin({ dev: true })],
      loader: {
        ".png": "file",
      },
    })
    .then(async (ctx) => {
      const { host, port } = await ctx.serve({
        servedir: "public",
        port: 8000,
        fallback: "public/index.html",
      });
      console.log(`Serving at http://${host}:${port}`);
      await ctx.watch();
    });
}

buildJs();
