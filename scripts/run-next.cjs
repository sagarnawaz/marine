const { spawn } = require("node:child_process");
const path = require("node:path");

// Next.js on Windows can create duplicate module identities when the project
// path is resolved with different casing. Normalize it before starting Next.
process.chdir(process.cwd().toLowerCase());

const [command, ...args] = process.argv.slice(2);
const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, command, ...args], {
  cwd: process.cwd(),
  stdio: "inherit",
  shell: false,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
