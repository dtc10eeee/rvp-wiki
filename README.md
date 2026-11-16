# RVP Wiki

VitePress source for the RVP wiki:

https://dtc10eeee.github.io/rvp-wiki/

Main repository: https://github.com/TV90/limitless-vehicle-rvp-addon

## Development

```bash
cd site
npm install
npm run docs:dev
```

Build the static site into `docs/` (the GitHub Pages source on `master`):

```bash
cd site
npm run docs:build
```

Theme settings live in `site/.vitepress/config.mts`; custom colors/gallery styles are in `site/.vitepress/theme/custom.css`.