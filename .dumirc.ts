import { defineConfig } from 'dumi';

export default defineConfig({
  exportStatic: {},
  history: {
    type: 'hash',
  },
  base: 'https://github.com/flyvv/flyvv.github.io',
  publicPath: 'https://flyvv.github.io/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-xform',
  },
});
