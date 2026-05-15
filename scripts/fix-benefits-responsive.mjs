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

function mergeClass(existing, add) {
  const parts = new Set(
    (existing || "")
      .split(/\s+/)
      .map((s) => s.trim())
      .filter(Boolean)
  );
  add.split(/\s+/).forEach((c) => parts.add(c));
  return [...parts].join(" ");
}

function addClassToOpeningTag(content, tagPattern, className) {
  const re = new RegExp(`(<${tagPattern}[^>]*)(>)`, "g");
  return content.replace(re, (match, open, close) => {
    if (!open.includes(className) && open.includes("style={{")) {
      const classMatch = open.match(/className="([^"]*)"/);
      if (classMatch) {
        const merged = mergeClass(classMatch[1], className);
        open = open.replace(/className="[^"]*"/, `className="${merged}"`);
      } else {
        open = `${open}\n        className="${className}"`;
      }
    }
    return open + close;
  });
}

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // Section wrapper
  content = content.replace(
    /<section(\s+[^>]*?)(\s+style=\{\{)/g,
    (m, attrs, styleStart) => {
      if (!attrs.includes("benefits-section") && content.includes("#162D24")) {
        if (attrs.includes('className="')) {
          return m.replace(/className="([^"]*)"/, (_, c) => `className="${mergeClass(c, "benefits-section")}"`);
        }
        return `<section${attrs} className="benefits-section"${styleStart}`;
      }
      return m;
    }
  );

  content = content.replace(
    /className="ada-benefits2-section"/g,
    'className="benefits-section ada-benefits2-section"'
  );

  content = content.replace(
    /className="ada-benefits2-grid"/g,
    'className="benefits-pillars-grid ada-benefits2-grid"'
  );

  // Flex layout inner
  if (content.includes('flexDirection: "row"') && content.includes("maxWidth: \"1200px\"")) {
    content = content.replace(
      /(<div)\s*\n(\s*)style=\{\{\s*\n\s*maxWidth: "1200px",/g,
      (m, tag, indent) => {
        if (content.slice(content.indexOf(m) - 80, content.indexOf(m)).includes("benefits-inner")) return m;
        return `${tag}\n${indent}className="benefits-inner"\n${indent}style={{\n${indent}  maxWidth: "1200px",`;
      }
    );
  }

  // Sticky / sidebar column
  content = content.replace(
    /(<motionlessIntro|<div)\s*\n(\s*)style=\{\{\s*\n(?:(?!\}\}>)[\s\S])*?position: "sticky",/g,
    (m, tag, indent) => {
      if (m.includes("benefits-sidebar")) return m;
      return m.replace(tag, `${tag}\n${indent}className="benefits-sidebar"`);
    }
  );

  content = content.replace(
    /(<div)\s*\n(\s*)style=\{\{\s*\n\s*flex: "0 0 clamp\(/g,
    (m, tag, indent) => {
      if (m.includes("benefits-sidebar")) return m;
      return `${tag}\n${indent}className="benefits-sidebar"\n${indent}style={{\n${indent}  flex: "0 0 clamp(`;
    }
  );

  // Content column
  content = content.replace(
    /(<div)\s*\n(\s*)style=\{\{\s*\n\s*flex: "1 1 0",\s*\n\s*minWidth: 0,/g,
    (m, tag, indent) => {
      if (m.includes("benefits-content")) return m;
      return `${tag}\n${indent}className="benefits-content"\n${indent}style={{\n${indent}  flex: "1 1 0",\n${indent}  minWidth: 0,`;
    }
  );

  // Fixed 54px titles
  content = content.replace(
    /(<h2)\s*\n(\s*)ref=\{titleRef\}\s*\n(\s*)style=\{\{([^}]*fontSize: "54px",[^}]*)\}\}/g,
    (m, tag, i1, i2, styles) => {
      const cleaned = styles
        .replace(/\s*fontSize: "54px",\s*/g, "\n")
        .replace(/\s*lineHeight: 1\.07,\s*/g, "\n");
      return `${tag}\n${i1}ref={titleRef}\n${i2}className="benefits-title"\n${i2}style={{${cleaned}}}`;
    }
  );

  // Remove inline 3-col grid (CSS handles layout)
  content = content.replace(
    /\s*gridTemplateColumns: "repeat\(3, minmax\(0, 1fr\)\)",\s*\n/g,
    "\n"
  );

  // Remove redundant scoped media style blocks
  content = content.replace(
    /\s*<style>\{\`\s*@media \(max-width: 860px\) \{\s*\.benefits-inner \{\s*flex-direction: column !important;\s*\}\s*\}\s*\`\}<\/style>/g,
    ""
  );

  content = content.replace(
    /\s*<style>\{\`\s*@media \(max-width: 900px\) \{\s*\.ada-benefits2-grid \{\s*grid-template-columns: 1fr !important;[\s\S]*?\}\s*\`\}<\/style>/g,
    ""
  );

  content = content.replace(
    /\s*<style>\{\`\s*@media \(max-width: 860px\) \{\s*\/\* On mobile[\s\S]*?\.benefits-left \{[\s\S]*?\}\s*\}\s*\`\}<\/style>/g,
    ""
  );

  // Reduce harsh horizontal padding on section (CSS provides responsive padding)
  content = content.replace(
    /padding: "clamp\(72px, 9vw, 120px\) clamp\(80px, 12vw, 200px\)"/g,
    'padding: "clamp(48px, 10vw, 120px) clamp(16px, 4vw, 24px)"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

const files = walk(componentsDir);
let updated = 0;
for (const file of files) {
  if (patchFile(file)) {
    updated++;
    console.log("patched:", path.relative(root, file));
  }
}
console.log(`Done. Updated ${updated} / ${files.length} files.`);
