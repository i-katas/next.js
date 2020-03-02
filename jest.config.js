module.exports = {
  moduleDirectories: ['src', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/test/enzyme-registry', './node_modules/jest-enzyme/lib/index.js']
}
