# Vite boilerplate Frontend

## Folder structure

```
#directory structure
├── .husky
├── dist
├── public
    ├── ico.svg
    ├── robots.txt
├── src
    ├── api                        // All related to data: API, Services, Mock, Tanstack Query
    ├── application                // Main parts of the application like App.tsx, Route and related utils
    ├── assets                     // Styles, fonts, images
    ├── components                 // Components, separated to atoms, molecules and organisms
        ├── atoms                  // Atoms: These are the building blocks, which cannot be further broken down
        ├── molecules              // Molecules: Atoms grouped together form a single molecule
        ├── organisms              // Organisms: Molecules joined together to create a part of the interface

    ├── hooks                      // global scope hooks
    ├── pages                      // app pages
    ├── utils                      // global scope utility functions
├── tailwind.config.js             // Tailwind configuration and Global Styles


```

## Scripts

| Script                      | Description                                  |
| --------------------------- | -------------------------------------------- |
| `pnpm run prepare`          | Installs husky                               |
| `pnpm start`                | Starts dummy server and app in `development` |
| `pnpm run dummy-server`     | Run dummy server using jsonServer            |
| `pnpm run dev`              | Start dev server in `development`            |
| `pnpm run build`            | Build for `production`                       |
| `pnpm run serve`            | Locally preview `production` build           |
| `pnpm run test`             | Run tests in watch mode, with coverage       |
| `pnpm run test:ci`          | Run tests once, with coverage                |
| `pnpm run format`           | Run prettier                                 |
| `pnpm run lint`             | Run eslint                                   |
| `pnpm run pre-commit-lint`  | Run linter on Git staged files               |
| --------------------------- | -------------------------------------------- |

- When you start your dev server in development, you can find you app running on
  http://localhost:8000/ (Due to Google Identity configuration, if you'll use =>
  http://127.0.0.1:8000 Google Auth will not work)

## Developer guidelines

Using [pnpm](https://pnpm.io/) as "Fast, disk space efficient package manager"

### To install dependencies:

- `npm i pnpm -g`
- `pnpm i`

* to install any new npm package run:
  - `pnpm i <package-name>` to add to the dependencies
  - `pnpm i <package-name> -D` to add to the devDependencies

### semgrepignore file:

To enable Admins to view feedback descriptions safely, we sanitized potentially vulnerable HTML code
before rendering. This resolved security concerns and allowed us to skip the security scan for the
said component by adding a "semgrepignore" file to the CI/CD pipeline.
