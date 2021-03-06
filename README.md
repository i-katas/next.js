# Tricks

## Next.js

- [`src/pages` will be used if `pages` is absent in the root directory](https://nextjs.org/docs/advanced-features/src-directory#caveats)
- [Avoid to use `jest-environment-enzyme` since it will makes `jest` testing merely slow](https://www.npmjs.com/package/jest-environment-enzyme)
- [Next.js with absolute imports to make the project structure](https://github.com/zeit/next.js/issues/2913#issuecomment-327901766)
- [`Component.getInitialProps()` will be executed on the server/the browser depends on where is the page rendering](https://nextjs.org/learn/basics/fetching-data-for-pages/fetch-data-in-client-side)
- [Enable jsx style by `next/babel` preset](.babelrc.js)
- [`dangerouslySetInnerHTML` didn't match occur in server-side rendering](https://github.com/zeit/next.js/issues/10803#issuecomment-593959513)


## React

- [Set string text as inner html by `dangerouslySetInnerHTML`](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)


## Babel

- [Fix babel regeneratorRuntime is not defined by `@babel/plugin-transform-runtime`](https://github.com/babel/babel/issues/8829#issuecomment-456524916)
