import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const asset of ['index.html', '_next', 'images', 'icon.svg', 'robots.txt', 'sitemap.xml', 'opengraph-image']) {
  await cp(path.join(root, asset), path.join(output, asset), { recursive: true });
}
console.log('Published production HTML, scripts, styles, fonts and images without transforming their contents.');
