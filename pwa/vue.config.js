const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'PWA',
    themeColor: '#3377dd',
    backgroundColor: '#ccc',
  },
});
