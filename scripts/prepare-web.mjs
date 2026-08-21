import { cp, mkdir, rm } from "node:fs/promises";

const assets = ["index.html", "manifest.webmanifest", "service-worker.js", "icons"];

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

await Promise.all(assets.map(asset => cp(asset, `dist/${asset}`, { recursive: true })));
