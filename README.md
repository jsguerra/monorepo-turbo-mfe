# Monorepo using Turborepo

This is a monorepo using Turoborepo and is setup as a microfrontend.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Next.js](https://nextjs.org/) app
- `blog`: another [Next.js](https://nextjs.org/) app
- `design-system`: a stub React component library shared by both `frontend` and `blog` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

## Reference Repos
Repositories and reference sites/pages for this build:
- [Turborepo](https://turbo.build/repo/docs/handbook/package-installation)
- [Microfrontends Vercel Github](https://github.com/vercel/examples/tree/main/solutions/microfrontends)
- [Monorepo Vercel Github](https://github.com/vercel/examples/tree/main/solutions/monorepo)
- [Multi Zones Repo](https://github.com/vercel/next.js/tree/canary/examples/with-zones)
- [Microfrontends using Next.js and Module Federation](https://github.com/schalela/mf-nextjs)
- [Module Federation Next.js 13](https://github.com/module-federation/module-federation-examples/tree/master/nextjs-v13)
- [Netlify Monorepos Docs](https://docs.netlify.com/configure-builds/monorepos/)

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
