import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "src/app/icomat1/wordpress");
for (const dir of fs.readdirSync(base)) {
  const p = path.join(base, dir, "page.js");
  if (!fs.existsSync(p)) continue;
  let s = fs.readFileSync(p, "utf8");
  if (s.includes("icomat-wp-service-page")) continue;
  const n = s.replace(
    /className="homepage-font-scope"/g,
    'className="homepage-font-scope icomat-wp-service-page"'
  );
  if (n !== s) {
    fs.writeFileSync(p, n, "utf8");
    console.log(path.relative(process.cwd(), p));
  }
}
