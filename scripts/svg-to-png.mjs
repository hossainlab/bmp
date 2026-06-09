import { chromium } from 'playwright';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const ADS_DIR = join(process.cwd(), 'public', 'ads');
const svgFiles = readdirSync(ADS_DIR).filter(f => f.endsWith('.svg'));

const browser = await chromium.launch();

for (const svgFile of svgFiles) {
  const svgPath = join(ADS_DIR, svgFile);
  const pngPath = join(ADS_DIR, svgFile.replace('.svg', '.png'));
  const svgContent = readFileSync(svgPath, 'utf-8');

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1080 });

  const html = `<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; }
  body { width: 1080px; height: 1080px; overflow: hidden; }
</style></head>
<body>${svgContent}</body></html>`;

  await page.setContent(html, { waitUntil: 'networkidle' });

  const screenshot = await page.screenshot({
    type: 'png',
    clip: { x: 0, y: 0, width: 1080, height: 1080 },
    scale: 'device',
  });

  writeFileSync(pngPath, screenshot);
  console.log(`Created: ${basename(pngPath)}`);
  await page.close();
}

await browser.close();
console.log('Done! All PNGs generated.');
