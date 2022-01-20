# URANUS DAO Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

Forked from https://github.com/pancakeswap/pancake-toolkit

Imported https://github.com/pancakeswap/pancake-frontend

Imported https://github.com/pancakeswap/pancake-swap-sdk

Imported https://github.com/pancakeswap/pancake-info-api

## Packages

- `uranus-uikit` : React components used to build the VVS UI
- `uranus-eslint-config` : An ESLint config for VVS, with Typescript and Prettier support
- `uranus-frontend` : Main VVS web app
- `uranus-info-api` : express nodejs API implementation for VVS on-chain data query
- `uranus-prelaunch` : prelaunch landing page with count down clock
- `uranus-profile-sdk` : Handy functions to retrieve data for VVS Profile system
- `uranus-swap-sdk`: Handy functions to retrieve data for VVS contracts
- `token-lists` : Main VVS token list and tools to validate it

## How to use

### Install `lerna`

```
npm install --global lerna
```

### Install dependencies

```
lerna bootstrap
```

### Build `uranus-uikit`

```
lerna run build --scope=uranus-uikit
```

### Build `uranus-swap-sdk`

```
lerna run build --scope=uranus-swap-sdk
```
### Build `uranus-info-api`

```
lerna run build --scope=uranus-info-api
```

### Start `uranus-info-api`

```
lerna run start:dev --stream --scope=uranus-info-api
```

### Build `uranus-frontend`

```
lerna run build --scope=uranus-frontend
```

### Start `uranus-frontend`

```
lerna run start --stream --scope=uranus-frontend
```

### Start `uranus-frontend` with build the dependencies

```
lerna run build --scope={uranus-uikit,uranus-swap-sdk} && lerna run start --stream --scope=uranus-frontend
```

### Run test

```
lerna run test
```

### Run lint

```
lerna run lint
```

### Run prettier check
```
lerna run format:check
```

## Troubleshooting

### Add child package to existing monorepo with git history

```
lerna import ~/pancake-frontend --flatten
lerna import ~/pancake-swap-sdk --flatten
lerna import ~/pancake-info-api --flatten
```

`--flatten` is important and commit history may lost without it
change `name` in `<child>/package.json` after imported

### Add sibling dependencies

```
lerna add vvs-uikit --scope=vvs-frontend
lerna add vvs-sdk --scope=vvs-frontend
```

### Remove child dependencies (when changing branches with different dependencies)

```
lerna clean  -y
```

### Remove root dependencies

```
rm -rf node_modules
```

### Remove locked dependencies

```
rm yarn.lock
```

### Resolve incorrect version of dependencies

Change package version in `<root>/package.json`

## References

https://medium.com/mitterio/multirepo-to-lerna-js-monorepo-80f6657cb443

https://stackoverflow.com/questions/60906133/cannot-add-dependency-to-sibling-monorepo-package-using-lerna

https://github.com/lerna/lerna/issues/2352
