# Catalog app

- Vue 3
- Typescript
- Vite
- Pinia
- Vitest
- Vue Router
- nvm version 20.9.0

## Patterns & Naming

### Patterns

We use Presentational-Container pattern along with hooks(composables).

### Naming

Every Router View/Layout component should be suffixed with View or Layout. eg. PageView, InnerLayout

Every component which communicates with the store (state management module) OR make heavy calculations, should be suffixed with Container. eg. CustomerContainer,

Every component that serves only style template should be suffixed with Wrapper. eg. StepWrapper
Every other component can be used as presentational or with small state data can be named as you like.

Skeleton components should be named like ComponentName and Skeleton. eg.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
