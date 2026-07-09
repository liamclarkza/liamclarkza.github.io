# liamjamesclark.com

Source for [liamjamesclark.com](https://liamjamesclark.com/), my personal website for projects, notes, and a web-first résumé.

The site is intentionally small and static. It is built with [Hugo](https://gohugo.io/) using a custom theme, and deployed to GitHub Pages.

## Local development

Run the Hugo development server:

```sh
hugo server --buildDrafts
```

The local site will be available at [localhost:1313](http://localhost:1313/).

## Content

- Projects live in `content/projects/`
- Notes live in `content/notes/`
- Résumé content lives in `content/resume.md`
- The custom theme lives in `themes/personal/`

## Deployment

Changes pushed to `main` are built and deployed to GitHub Pages by the workflow in `.github/workflows/hugo.yml`.
