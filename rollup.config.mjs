import clear from 'rollup-plugin-clear'
import filesize from 'rollup-plugin-filesize'

import BANNER from './build/banner.js'
import { output, outputs } from './build/output.js'
import { pluginsBase, pluginsProd, injectVersion } from './build/plugins.js'

import pkg from './package.json' with { type: "json" }

const { ROLLUP_WATCH, DEBUG, TEST } = process.env

const debugMode = DEBUG || ROLLUP_WATCH || false
const sourcemap = debugMode
const logging = debugMode || TEST

const pluginsJs = TEST 
    ? injectVersion()
    : pluginsBase(!logging)

console.log('\nBuilding iframe-resizer version', pkg.version, debugMode ? 'DEVELOPMENT' : 'PRODUCTION', '\n')

const npm = [
  //  ES module (for bundlers) and CommonJS (for Node) build.
  {
    input: 'src/parent/esm.js',
    output: [
      output('parent')('es'), 
      output('parent')('cjs')
    ],
    plugins: pluginsProd('parent'),
  },

  // browser-friendly UMD build
  {
    input: 'src/parent/umd.js',
    output: [{
      name: 'iframeResize',
      ...output('parent')('umd')
    }],
    plugins: pluginsProd('parent'),
  }, 
  
  // child
  {
    input: 'src/child/main.js',
    output: outputs('child'),
    plugins: pluginsProd('child'),
  }, 

  // jquery
  {
    input: 'src/jquery/plugin.js',
    output: outputs('jquery'),
    plugins: pluginsProd('jquery'),
  }, 
]

// JS folder
const js = [ 
  {
    input: 'src/parent/umd.js',
    output: [{
      name: 'iframeResize',
      file: 'js/iframe-resizer.parent.js',
      format: 'umd',
      banner: BANNER.parent,
      sourcemap,
    }],
    plugins: [
      clear({ targets: ['js']}),
      ...pluginsJs('parent'),
      filesize(),
    ],
  }, 

  {
    input: 'src/child/main.js',
    output: [{ 
      file: 'js/iframe-resizer.child.js',
      format: TEST ? undefined : 'umd',
      banner: BANNER.child,
      sourcemap,
    }],
    plugins: [
      ...pluginsJs('child'),
      filesize(),
    ],
  }, 

  {
    input: 'src/jquery/plugin.js',
    output: [{
      file: 'js/iframe-resizer.parent.jquery.js',
      format: 'umd',
      banner: BANNER.jquery,
      sourcemap,
    }],
    plugins: [
      ...pluginsJs('jquery'),
      filesize(),
    ],
  }, 
]

export default debugMode || TEST ? js : npm.concat(js)
