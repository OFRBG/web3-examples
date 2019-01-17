import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import cleanup from 'rollup-plugin-cleanup';

const outPath = 'dist/';
const moduleName = 'CustomMethods';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: outPath + moduleName + '.cjs.js',
        format: 'cjs'
      },
      {
        name: moduleName,
        file: outPath + moduleName + '.umd.js',
        format: 'umd',
        globals: {}
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        runtimeHelpers: true,
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              targets: {
                node: '6',
                browsers: 'last 2 versions'
              }
            }
          ]
        ],
        plugins: [
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-proposal-export-namespace-from',
          ["@babel/plugin-transform-runtime", {
            "helpers": true,
            "regenerator": true
          }]
        ]
      }),
      json(),
      autoExternal(),
      cleanup()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: outPath + moduleName + '.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: [
          '@babel/plugin-proposal-export-default-from',
          '@babel/plugin-proposal-export-namespace-from'
        ]
      }),
      json(),
      autoExternal(),
      cleanup()
    ]
  }
];
