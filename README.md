# Node.js & TypeScript Template

This repository template makes it easier to create a new NPM library, package or application using Node.js and TypeScript. It comes with several developer tools pre-configured and ready to use, so it's easier to get started.

## Features

  - [x] [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) [v5.0](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html) support
  - [x] Support for [GitHub Codespaces](https://github.com/features/codespaces)
  - [x] Continuous integration with [GitHub Actions](https://github.com/features/actions) and [Codesandbox CI](https://codesandbox.io/ci)
  - [x] Auto-bundled, minified source code with [Vite](https://vitejs.dev/)
  - [x] Unit testing and code coverage with [Vitest](https://vitest.dev/) framework
  - [x] Auto-generated documentation for TypeScript code with [TypeDoc](https://typedoc.org/)
  - [x] Auto-formatted and linted code with [ESLint](https://eslint.org/)
  - [x] Dependency updates with [Dependabot](https://github.com/dependabot)

## Getting started

### Creating a new repository

#### GitHub UI

You can create a new repository based on this template by clicking the "Use this template" button in the top-right corner of this page.

#### Terminal

You can run the following command below with the [GitHub CLI](https://cli.github.com/). Some notes:

- Replace placeholder with name of your extension in upper CamelCase
- Configure your repository's visibility with `--public`, `--private`, or `--internal`

```shell
gh repo create {repo-name} --public --clone --template neoncitylights/node-ts-template
```

### Cookiecutter stuff

Using your favorite text editor or IDE, find-and-replace the following placeholders:

- `@author/package`: Replace this with the name of your package. This can be scoped under a user/organization (e.g `@samantha/my-really-cool-package`). **Note**: This placeholder is different than the others to avoid warnings from the NPM client.
- `{libauthor}`: Replace this with your GitHub/npm username, or the name of your organization.
- `{libname}`: Replace this with the name of your library.
- `neonctylights/node-ts-template`: Replace this with the name of your repository (these occur in the badge URLs inside the `README.md` file).

Delete this `README.md`, and rename [`LIBRARY.md`](./LIBRARY.md) to `README.md`.

## Configure

| Tool | File | Documentation |
| ---- | ---- | ------------- |
| NPM package | [`package.json`](./package.json) | [docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json), [website](https://docs.npmjs.com/) |
| TypeScript | [`tsconfig.json`](./tsconfig.json) | [docs](https://www.typescriptlang.org/tsconfig), [website](https://www.typescriptlang.org/) |
| ESLint (code formatter + linter) | [`.eslintrc.js`](./eslintrc.js) | [docs](https://eslint.org/docs/latest/user-guide/configuring/), [website](https://eslint.org/) |
| Vite (bundler) | [`vite.config.ts`](./vite.config.ts) | [docs](https://vitejs.dev/config/), [website](https://vitejs.dev/) |
| Vitest (testing framework) | [`vitest.config.ts`](./vitest.config.ts) | [docs](https://vitest.dev/config/), [website](https://vitest.dev/) |
| TypeDoc (documentation generator) | [`typedoc.json`](./typedoc.json) | [docs](https://typedoc.org/options/configuration/), [website](https://typedoc.org/) |
| CodeSandbox CI | [`.codesandbox/ci.json`](./.codesandbox/ci.json) | [docs](https://codesandbox.io/docs/learn/sandboxes/ci#configuration), [website](https://codesandbox.io/) |
| Dependabot | [`.github/dependabot.yml`](./.github/dependabot.yml) | [docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file), [website](https://github.com/dependabot) |

## License

This software is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
