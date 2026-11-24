// Entry point for the post-x-promote-make-your-own-bounty-01 bounty.
//
// The entry is one post on X; its address lives in POST.json next to this
// file. All this program does is copy that file into the output directory
// so the house can read the post's address from there.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));
