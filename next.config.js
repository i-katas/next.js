const path = require('path')

module.exports = {
  webpack(config, options) {
    Object.assign(config.resolve.alias, {
      '@components': path.join(__dirname, 'src/@components'),
      '@services': path.join(__dirname, 'src/@services')
    });
    return config
  },
}
