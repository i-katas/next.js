module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: [
      '<rootDir>/test/jest-enzyme-registry',
      '<rootDir>/test/environments',
      './node_modules/jest-enzyme/lib/index.js'
  ]
}
