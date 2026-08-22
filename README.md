# Joydeep Tripathy — Portfolio

A custom, responsive portfolio for **Joydeep Tripathy**: backend engineer, Google Summer of Code contributor, open-source maintainer, and machine-learning researcher.

The site is built with Next.js but exported as fully static files, so it runs free on GitHub Pages. Every push to `main` automatically rebuilds and republishes it.

## Preview it locally on Windows

Install [Node.js 22 LTS](https://nodejs.org/), open PowerShell in this folder, and run:

```powershell
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Publish it at `joydeep-tripathy.github.io`

### 1. Create the repository

On GitHub, create a **public** repository named exactly:

```text
joydeep-tripathy.github.io
```

Do not add a README, `.gitignore`, or license on GitHub—the project already contains what it needs.

### 2. Push this project

Extract the ZIP, open PowerShell inside the extracted folder, and run:

```powershell
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/joydeep-tripathy/joydeep-tripathy.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.

Your site will be live at:

```text
https://joydeep-tripathy.github.io/
```

GitHub may take a minute or two to serve the first deployment.

## Update the content

- Main content: `app/page.tsx`
- Visual design and mobile styles: `app/globals.css`
- Page title, description, and social metadata: `app/layout.tsx`
- Favicon: `public/favicon.svg`

After editing, push the changes:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

The included workflow republishes the site automatically.