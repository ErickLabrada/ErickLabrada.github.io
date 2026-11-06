# QuantumMessHub

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Build for GitHub Pages

```sh
pnpm build:pages
```

This runs the production build and route regression tests, then creates
`dist/projects/<slug>/index.html` for every project declared in `src/data/projects.ts`,
including projects hidden from the archive. Each entry reuses Vite's bundled HTML
and root-relative assets, with an English project title and description. The generator
parses the TypeScript data without executing asset imports and rejects duplicate or
unsafe slugs and missing metadata. Unknown project paths have no generated entry and
retain GitHub Pages' normal 404 behavior.

For a local hosting check, serve `dist` with a static server without SPA fallback:

```sh
python3 -m http.server 4173 --directory dist
```

Open and refresh `/projects/sales-agent-ai/`, `/projects/ticket-receiver/`, and
`/projects/open-go-readme/`; verify their images and both languages. Confirm an
unknown project path returns HTTP 404. GitHub Pages redirects directory URLs to
their trailing-slash equivalents. Repeat these checks on the public site after
deployment before sharing the direct case-study links. Initial English metadata
is generated at build time; in-app and localized metadata updates are separate work.

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
