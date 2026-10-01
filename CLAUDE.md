# Pikzer

Tauri 2 desktop app: React + TypeScript + Tailwind CSS v4 frontend (`src/`), Rust backend (`src-tauri/`).

## Git rules

- **NEVER create commits automatically.** Do not run `git commit` (or amend, or push) unless the user explicitly asks for it in that message. Finishing a task is not a request to commit; leave changes in the working tree.
- When the user does ask for a commit, use this message format: one sentence summarizing the commit, a blank line, then bullets of what was changed, each a concise sentence.

  ```
  Add greet button wired to the Rust backend.

  - Add `greet` command in `src-tauri/src/lib.rs`.
  - Call it from `App.tsx` via `invoke`.
  ```

## Commands

- `npm run tauri dev` — run the app with hot reload
- `npm run build` — typecheck + build the frontend
- `npm run tauri build` — build the installer
- `cargo check --manifest-path src-tauri/Cargo.toml` — check the Rust backend

## Layout

- `src/` — React frontend; Tailwind is loaded via `src/index.css`
- `src-tauri/` — Rust backend; expose commands with `#[tauri::command]` and register them in `src-tauri/src/lib.rs`
- `docs/` — project documentation
- `docs/history/` — log of technical, design, and brand changes (one dated file per change, e.g. `2026-10-01-short-title.md`). Add an entry when making such a change.
- `content/` — local content, gitignored. Never commit or reference it as tracked.
