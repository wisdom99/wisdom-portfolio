# Wisdom Portfolio

A static Next.js portfolio set up for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `wisdom-portfolio`
2. Push this project to the `main` branch
3. In GitHub, go to **Settings → Pages**
4. Set the source to **GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` will build and publish the site

## Notes

- This project uses static export, so it is compatible with GitHub Pages.
- If you rename the repository, update `repo` in `next.config.mjs`.
- For a root-domain user site (`username.github.io`), remove the `basePath` and `assetPrefix` logic.
