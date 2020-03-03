module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      '@babel/env', '@babel/react',
      [
        "next/babel",
        {
          "styled-jsx": {
            "plugins": [
              "styled-jsx-plugin-postcss"
            ]
          }
        }
      ]
    ],
    plugins: [
      ["@babel/transform-runtime", {"regenerator": true}],
      '@babel/proposal-optional-chaining'
    ]
  }
}
