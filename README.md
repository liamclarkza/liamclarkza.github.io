# liamjamesclark.com

Liam Clark's personal site, built with Hugo and deployed to GitHub Pages.

## Run locally

```sh
hugo server --buildDrafts
```

Open `http://localhost:1313/`.

## Add content

- Projects: add Markdown files in `content/projects/`
- Notes: add Markdown files in `content/notes/`
- Résumé: edit `content/resume.md`
- Homepage: edit `themes/personal/layouts/index.html`
- Theme: edit `themes/personal/assets/css/main.css`

## GitHub Pages

The workflow at `.github/workflows/hugo.yml` builds and deploys the site whenever `main` changes. In the repository's **Settings → Pages**, set the source to **GitHub Actions** and set the custom domain to `liamjamesclark.com`.

## Cloudflare DNS

Create these DNS-only records in Cloudflare:

| Type | Name | Target |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `liamclarkza.github.io` |

Remove conflicting `@` or `www` records first. Once GitHub has issued the certificate, enable **Enforce HTTPS** in **Settings → Pages**. DNS changes and certificate issuance can take time.
