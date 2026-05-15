import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (name === "OurAdvantageSection.js") acc.push(full);
  }
  return acc;
}

const root = path.join(process.cwd(), "components");

const oneLine =
  /\n\s*className="flex flex-col gap-4 md:gap-6"\s*\n\s*style=\{\{ flex: "0 0 45%", position: "sticky", top: "8rem", alignSelf: "flex-start" \}\}/g;

const hostingBlock =
  /ref=\{leftColRef\}\s*\n\s*className="flex flex-col gap-4 md:gap-6"\s*\n\s*style=\{\{\s*\n\s*flex: "0 0 45%",[\s\S]*?alignSelf: "flex-start",\s*\n\s*\}\}/;

let n = 0;
for (const f of walk(root)) {
  let c = fs.readFileSync(f, "utf8");
  const o = c;
  c = c.replace(
    oneLine,
    '\n          className="our-advantage-sidebar flex flex-col gap-4 md:gap-6"\n          style={{ flex: "0 0 45%" }}'
  );
  c = c.replace(
    hostingBlock,
    `ref={leftColRef}
          className="our-advantage-sidebar flex flex-col gap-4 md:gap-6"
          style={{
            flex: "0 0 45%",
          }}`
  );
  if (c !== o) {
    fs.writeFileSync(f, c, "utf8");
    console.log(path.relative(process.cwd(), f));
    n++;
  }
}
console.log("updated", n, "files");
