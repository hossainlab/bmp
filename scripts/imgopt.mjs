import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const dirs = process.argv.slice(2);
const MAX = Number(process.env.MAXEDGE ?? 1000);
let before = 0, after = 0, n = 0;

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(fp));
    else if (/\.(png|jpe?g)$/i.test(e.name)) out.push(fp);
  }
  return out;
}

for (const dir of dirs) {
  if (!fs.existsSync(dir)) { console.log("missing", dir); continue; }
  for (const fp of walk(dir)) {
    const f = path.basename(fp);
    const orig = fs.statSync(fp).size;
    const ext = path.extname(f).toLowerCase();
    try {
      const input = fs.readFileSync(fp);
      const img = sharp(input).rotate().resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
      const buf = ext === ".png"
        ? await img.png({ compressionLevel: 9, quality: 80, palette: true }).toBuffer()
        : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      if (buf.length < orig) fs.writeFileSync(fp, buf);
      const nw = fs.statSync(fp).size;
      before += orig; after += nw; n++;
      console.log(`${(orig/1048576).toFixed(2)}MB -> ${(nw/1048576).toFixed(2)}MB  ${f}`);
    } catch (e) { console.log("SKIP", f, e.message); }
  }
}
console.log(`\nTotal: ${(before/1048576).toFixed(1)}MB -> ${(after/1048576).toFixed(1)}MB across ${n} files`);
