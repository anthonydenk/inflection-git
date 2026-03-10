# Branch Guide

## Branch Structure

| Branch | Purpose |
|---|---|
| `main` | Production branch. Auto-deploys to Netlify on every merge. Never commit directly. |
| `onePager` | Primary active development branch. All feature work happens here. |
| `onePagerNew` | Secondary/experimental branch. Use for larger exploratory changes. |

---

## Standard Git Workflow

### 1. Start from the development branch

Always make sure your local branches are up to date before starting new work:

```bash
# Update remote tracking info
git fetch origin

# Sync your local onePager with remote
git checkout onePager
git merge origin/onePager

# Optionally update local main (read-only — do not push to main directly)
git checkout main
git merge origin/main
git checkout onePager
```

### 2. Make your changes

Work directly on `onePager` for standard feature work. For larger or experimental changes, branch off from `onePager`:

```bash
git checkout -b feature/your-feature-name
```

### 3. Commit your changes

Keep commits focused and descriptive:

```bash
git add src/path/to/changed/file.js
git commit -m "short description of what changed"
```

Avoid `git add .` — stage files explicitly to avoid accidentally committing build artifacts, `.env` files, or unrelated changes.

### 4. Push to remote

```bash
git push origin onePager
# or for a feature branch:
git push origin feature/your-feature-name
```

### 5. Open a Pull Request to `main`

- Go to GitHub and open a PR from `onePager` → `main`
- Review the diff carefully before merging
- Netlify will automatically deploy once the PR is merged

---

## Rules

- **Never push directly to `main`** — always go through a PR
- **Never force-push** to `main` or `onePager`
- Do not commit `node_modules/`, `build/`, or `.env` files
- Run `npm run build` locally before opening a PR to catch any build errors
