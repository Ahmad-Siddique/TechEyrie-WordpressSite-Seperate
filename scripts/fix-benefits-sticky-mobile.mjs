import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = path.join(root, "components");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (/^BenefitsSection.*\.js$/.test(name)) acc.push(full);
  }
  return acc;
}

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  content = content.replace(
    /(<div\s*\n\s*)className="benefits-sidebar"\s*\n(\s*style=\{\{\s*\n\s*display: "inline-flex")/g,
    "$1$2"
  );

  const exportIdx = content.indexOf("export default function");
  if (exportIdx !== -1) {
    const before = content.slice(0, exportIdx);
    let after = content.slice(exportIdx);

    after = after.replace(/\s*position: "sticky",\s*\n/g, "\n");
    after = after.replace(/\s*top: "(?:clamp\([^"]+\)|8rem|[^"]+)",\s*\n/g, "\n");

    after = after.replace(
      /(className="benefits-inner"[\s\S]*?)(\n\s*<div)\s*\n(\s*)(?!className=)(style=\{\{)/,
      (m, head, divOpen, indent, styleStart) => {
        if (head.includes("benefits-sidebar")) return m;
        return `${head}${divOpen}\n${indent}className="benefits-sidebar"\n${indent}${styleStart}`;
      }
    );

    content = before + after;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

let n = 0;
for (const file of walk(componentsDir)) {
  if (patchFile(file)) {
    n++;
    console.log("fixed:", path.relative(root, file));
  }
}
console.log(`Updated ${n} files.`);
