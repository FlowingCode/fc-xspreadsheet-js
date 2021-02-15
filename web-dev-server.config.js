import rollupReplace from '@rollup/plugin-replace';
import { fromRollup } from '@web/dev-server-rollup';
import rollupLitCSS from 'rollup-plugin-lit-css';

const replace = fromRollup(rollupReplace);
const pluginLitCSS = fromRollup(rollupLitCSS);

export default {
  mimeTypes: {
    // serve all json files as js
    '**/*.json': 'js',
    // serve .module.css files as js
    '**/*.css': 'js',
  },
  plugins: [
    pluginLitCSS({
      include: ['**/*.css'],
    }),
    replace({ include: ['src/**/*.js'], __environment__: '"development"' })
  ],
};