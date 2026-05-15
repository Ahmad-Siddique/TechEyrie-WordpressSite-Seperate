import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "components");

function heroPaths() {
  const dirs = fs.readdirSync(root).filter((n) => n.startsWith("icomat1-wordpress-"));
  const paths = dirs.map((d) => path.join(root, d, "HeroSection.js")).filter((p) => fs.existsSync(p));
  paths.push(path.join(root, "wordpress", "HeroSection.js"));
  return paths.filter((p) => fs.existsSync(p));
}

for (const file of heroPaths()) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;
  if (s.includes('className="icomat-wp-service-hero"')) continue;

  // Video-style heroes: <section then newline then style={{
  s = s.replace(
    /(<section)\s*\n(\s*)(style=\{\{)/,
    '$1\n$2className="icomat-wp-service-hero"\n$2$3'
  );

  if (s !== orig) {
    fs.writeFileSync(file, s, "utf8");
    console.log(path.relative(process.cwd(), file));
  }
}
