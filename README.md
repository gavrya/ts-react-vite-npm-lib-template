# ts-react-vite-npm-lib-template

The starter template that built on top of Vite and designed for creating production ready NPM libraries in TypeScript

## Main features

- Uses `npm`, `npx` and `nvm` cli tools
- Generates UMD/CJS and ESM modules
- Generates TypeScript type definitions
- React support
- Preconfigured GitHub Actions CI/CD
- Automated version and release management
- Preconfigured code formatters, linters, test framework and build tools
- Automated generation of changelog and release notes
- Automated generation of GitHub Pages with Storybook, Docusaurus, Typedoc and Test Coverage report

## Notes and limitations

- Generates ES6 compatible module format (for modern browsers)
- Stylelint is not used
- Browserslist is not used
- Does not generates sourcemaps
- Does not bundles declaration files into a single `.d.ts` file (Vite bundler issue)
- Does not strip whitespaces and new lines from ESM bundle (Vite bundler [issue](https://github.com/vitejs/vite/issues/6079))
- Default code coverage is set to 80% minimum
- Edit `.npmrc` file to whitelist npm audit issues

## Main components

| Name                  | Description                                                                                                 | Links                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vite                  | Build tool                                                                                                  | [https://vitejs.dev](https://vitejs.dev)                                                                                                                                                                                                                                                                                                           |
| Vitest                | Test framework                                                                                              | [https://vitest.dev](https://vitest.dev)                                                                                                                                                                                                                                                                                                           |
| Storybook             | A tool that helps you create React components in isolation                                                  | [https://storybook.js.org](https://storybook.js.org)                                                                                                                                                                                                                                                                                               |
| TypeScript            | Type linter                                                                                                 | [https://www.typescriptlang.org](https://www.typescriptlang.org)                                                                                                                                                                                                                                                                                   |
| Editorconfig          | A set of configuration rules that define coding style preferences                                           | [https://editorconfig.org](https://editorconfig.org/)                                                                                                                                                                                                                                                                                              |
| Prettier              | Code formatter                                                                                              | [https://prettier.io](https://prettier.io)                                                                                                                                                                                                                                                                                                         |
| ESLint                | Code linter. The basic configuration is based on the airbnb configuration.                                  | [https://eslint.org](https://eslint.org) [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)                                                                                                                                                                                                                              |
| Husky                 | Runs custom cli commands on git hook events                                                                 | [https://typicode.github.io/husky](https://typicode.github.io/husky)                                                                                                                                                                                                                                                                               |
| Lint-staged           | Runs linters against staged git files                                                                       | [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)                                                                                                                                                                                                                                                             |
| Semantic-release      | Automates package versioning, releasing, publishing packages to npm and uploading static UI to Github pages | [https://semantic-release.gitbook.io/semantic-release/usage/configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration)                                                                                                                                                                                               |
| Commitlint            | Lints git commit messages                                                                                   | [https://commitlint.js.org](https://commitlint.js.org) [https://www.conventionalcommits.org/en/v1.0.0](https://www.conventionalcommits.org/en/v1.0.0)                                                                                                                                                                                              |
| Commitizen            | Interactive cli tool for creating semantically correct commit messages                                      | [https://commitizen-tools.github.io/commitizen](https://commitizen-tools.github.io/commitizen)                                                                                                                                                                                                                                                     |
| GitHub actions CI/CD  | Preconfigured GitHub Actions workflow                                                                       | [https://docs.github.com/en/actions](https://docs.github.com/en/actions)                                                                                                                                                                                                                                                                           |
| Import alias          | Preconfigured import alias `#src/*` -> `./src/*`                                                            | [https://vitejs.dev/config/shared-options.html#resolve-alias](https://vitejs.dev/config/shared-options.html#resolve-alias) [https://www.typescriptlang.org/tsconfig#paths](https://www.typescriptlang.org/tsconfig#paths) [https://www.npmjs.com/package/eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias) |
| Typedoc               | Api documentation generator from TSdoc comments                                                             | [https://typedoc.org](https://typedoc.org) [https://tsdoc.org](https://tsdoc.org)                                                                                                                                                                                                                                                                  |
| Docusaurus            | Documentation UI generator                                                                                  | [https://docusaurus.io](https://docusaurus.io)                                                                                                                                                                                                                                                                                                     |
| React Testing Library | Solution for testing React components                                                                       | [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro) [https://www.npmjs.com/package/@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)                                                                                                    |

## NPM scripts

| Command               | Description                                                                                       | Notes                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `build`               | Lint TS types and build library                                                                   | `dist` directory will contain UMD/CJS, ESM and TS types declarations                                                                                                     |
| `test`                | Run tests                                                                                         |                                                                                                                                                                          |
| `test:watch`          | Run tests in watch node                                                                           |                                                                                                                                                                          |
| `test:coverage`       | Generate code coverage report                                                                     | `coverage` directory will contain code coverage reports                                                                                                                  |
| `test:dashboard`      | Run tests in watch node with UI dashboard                                                         | Automatically opens `http://localhost:51204/__vitest__/#` page in the browser. See documentation at [https://vitest.dev/guide/ui.html](https://vitest.dev/guide/ui.html) |
| `lint`                | Lint all `.ts` and `.tsx` files located in `src` directory using eslint                           | ESLint configuration files: `.eslintrc.cjs` and `.eslintignore`                                                                                                          |
| `lint:fix`            | Lint and fix all `.ts` and `.tsx` files located in `src` directory using eslint                   |                                                                                                                                                                          |
| `format`              | Check formatting of all `.ts`, `.tsx` and `.json` files located in `src` directory using prettier | Prettier configuration file: `.prettierrc.cjs`                                                                                                                           |
| `format:fix`          | Reformat all `.ts`, `.tsx` and `.json` files located in `src` directory using prettier            | Files can be modified                                                                                                                                                    |
| `prepare`             | Husky integration-related command. No need to invoke it manually.                                 | Automatically invoked by `npm install` command                                                                                                                           |
| `commit`              | Trigger interactive cli tool for creating semantically correct commit messages                    | Runs Commitizen. Use this command instead of `git commit`                                                                                                                |
| `storybook`           | Start Storybook                                                                                   |                                                                                                                                                                          |
| `build:storybook`     | Build Storybook static UI                                                                         | Generated files will be located in `storybook-static` directory                                                                                                          |
| `docusaurus`          | Start Docusaurus UI                                                                               | Docusaurus directory: `docusaurus`                                                                                                                                       |
| `build:docusaurus`    | Build Docusaurus static UI                                                                        | Generated files will be located in `docusaurus/build` directory                                                                                                          |
| `build:typedoc`       | Build api documentation static UI                                                                 | Generated files will be located in `typedoc` directory                                                                                                                   |
| `security-audit:prod` | Start npm audit for production packages                                                           | Used by GitHub Actions workflow `.github/workflows/release.yml`                                                                                                          |
| `security-audit:dev`  | Start npm audit for devevelopment packages                                                        | Used by GitHub Actions workflow `.github/workflows/release.yml`                                                                                                          |

## Usage checklist

### 1) Clone starter template

```shell
# Clone the GitHub project
git clone https://github.com/gavrya/ts-react-vite-npm-lib-template.git my-new-repo

# Navigate into the cloned directory
cd my-new-repo

# Remove the .git directory
rm -rf .git

# Initialize a new Git repository
git init
```

### 2) Install packages

```shell
# Set correct node version using nvm
nvm use

# Install packages
npm install
```

### 3) Edit `package.json`

- Change `version` to initial version 0.0.1
- Change `name` to your git repo name
- Edit `description`
- Change `private` to `true` when you will be ready to publish your package to the npm
- Edit `license`
- Edit `keywords`
- Change `repository.url` using template `https://github.com/{git_user}/{git_repo_name}.git`
- Change `homepage` using template `https://{git_user}.github.io/{git_repo_name}/docs`

### 4) Edit `vite.config.ts`

- Change `build.name` from `TsReactViteNpmLibTemplate` to your library name in capitalized case
- Set global names of external libraries `build.rollupOptions.output.globals`
- Update code coverage limits `test.coverage`

### 5) Edit `docusaurus.config.js` in `docusaurus` directory

- Edit `config` fields: `title`, `tagline`, `favicon`, `organizationName`, `projectName`
- Edit `themeConfig` fields: `navbar.title`, `navbar.logo`, `footer.copyright`

### 6) Update `README.md` file

- Add a meaningful description associated with your library
- Add instructions for installing your library
- Add instructions for using your library

### 7) Create `GH_TOKEN` and `NPM_TOKEN` for semantic-release

YT video tutorial: [https://youtu.be/QZdY4XYbqLI?t=411](https://youtu.be/QZdY4XYbqLI?t=411)

- Create `NPM_TOKEN`

![npm-token.png](src%2Fexample%2Fimages%2Fnpm-token.png)

- Create `GH_TOKEN`

![github-secrets.png](src%2Fexample%2Fimages%2Fgithub-secrets.png)

### 8) Configure GitHub Pages

- Create an empty `gh-pages` repository

```shell
# Create a new branch called gh-pages that is completely empty.
# It doesn't contain any files or commit history from the previous branch you were on.
git checkout --orphan gh-pages

# This command creates a commit in the gh-pages branch with the specified commit message.
# The commit itself doesn't introduce any changes to the branch because it's empty.
# However, this initial commit is often used as a placeholder to initialize the branch.
git commit --allow-empty -m "Init gh-pages branch"

# This command pushes the local gh-pages branch, including the empty commit you created earlier, to the remote repository named origin.
# As a result, the remote repository now has a branch called gh-pages with the empty commit, and you can use this branch to publish content or set up a GitHub Pages site.
git push origin gh-pages
```

- Setup GitHub pages

![github-pages-setup.png](src%2Fexample%2Fimages%2Fgithub-pages-setup.png)

GitHub Pages static UI routes:

`/docs` - Docusaurus\
`/coverage` - Test Coverage\
`/storybook-static` - Storybook\
`/typedoc` - Typedoc

### 9) Remove `example` directory from the `src` folder and place your own code

### 10) Make initial commit and push changes

```shell
# Add your files and commit them
git add .
git commit -m "chore: initial commit"

# Create a new empty repository on GitHub (assuming it's named 'my-new-repo')
# Copy the URL of the new repository (should be something like https://github.com/username/my-new-repo.git)

# Add the new remote origin
git remote add origin https://github.com/username/my-new-repo.git

# Verify the new remote
git remote -v

# Push your commits to the new remote origin
git push -u origin master
```
