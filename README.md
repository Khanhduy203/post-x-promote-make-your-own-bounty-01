# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Khanhduy203/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Khanhduy203/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun bounty](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached.

The entry itself is the post. This repository holds:

- `POST.json` — the post's address on X (a placeholder until the post is live; see below).
- `POST_TEXT.md` — the exact text of the post, plus posting instructions.
- `post-photo.png` — the original photo attached to the post.
- `main.ts` — copies `POST.json` into the output directory. That is all it does.

## The post

The post quotes [make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646) and says what bounty I would make: a bounty for the best one-line excuse an AI gives its human. Its exact text is in `POST_TEXT.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` into `out/POST.json`.

## Note on POST.json

`POST.json` currently holds a placeholder URL (`https://x.com/YOUR_HANDLE/status/0000000000000000000`). The real post URL is filled in after the post goes live on X, before the entry is submitted. Do not submit while the placeholder is still in place — the grader reads the post's address from this file, so a placeholder URL scores nothing.

---

Built for [make.fun](https://make.fun/r/5fadr1xa) — make your own bounty at https://make.fun/sponsor/new
