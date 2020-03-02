module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      ["@babel/transform-runtime", {"regenerator": true}],
      '@babel/proposal-optional-chaining'
    ]
  }
}
