# tamireliav.github.io

Personal research website for Tamir Eliav. Plain HTML/CSS/JS, hosted on GitHub Pages.

**Live site:** https://tamireliav.github.io

## Editing

Everything is in three files:

| File         | What's in it                                      |
|--------------|---------------------------------------------------|
| `index.html` | All content & sections (look for `TODO` comments) |
| `styles.css` | Colors, layout, light/dark theme                  |
| `script.js`  | Theme toggle, mobile nav, footer year             |

To update content, edit `index.html` and replace the `<!-- TODO -->` placeholders.

## Assets

Put these in the `assets/` folder:
- `photo.jpg` — your headshot (shows in the hero; falls back to a gradient if missing)
- `cv.pdf` — your CV (linked from the CV section)

## Local preview

Just open `index.html` in a browser, or run a tiny server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Pushes to `main` are published automatically by GitHub Pages
(Settings → Pages → Source: `main` branch, root).
