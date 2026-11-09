import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const dir = path.join(process.cwd(), "src", "app");
  const routes = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() && fs.existsSync(path.join(dir, d.name, "page.tsx")),
    )
    .map((d) => `/${d.name}`);

  return ["", ...routes].map((r) => ({
    url: `https://willmorelumber.com${r}`,
  }));
}
