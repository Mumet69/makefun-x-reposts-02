import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const bot = process.env.MAKEFUN_BOT_DIR ?? ".";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const data = JSON.parse(readFileSync(`${bot}/POSTS.json`, "utf8")) as { posts: string[] };
mkdirSync(out, { recursive: true });
copyFileSync(`${bot}/POSTS.json`, `${out}/POSTS.json`);
console.log("makefun-x-reposts-02");
console.log(`posts: ${data.posts.length}`);
for (const url of data.posts) console.log(url);
