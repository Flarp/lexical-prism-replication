# Lexical Prism Error (attempted) Duplication with Bundlers

This repo is an attempted replication of the error noted [here](https://github.com/remix-run/remix/discussions/8182) when using Lexical code components in a bundled environment. This repo has a very basic script that creates a Lexical editor (not attached to any element) and immediately creates a CodeHighlightNode in the context of the editor via `editor.update()`

Before anything, be sure to do `npm i` and make sure to have Rollup, WebPack, and esbuild globally installed

## Rollup

Execute with `rollup --config rollup.config.mjs`. Will output to `dist/bundle.js`

## WebPack

Execute with `webpack`. Will output to `dist/bundle.js`

## esbuild

Execute with `esbuild src/index.js --bundle --outfile=dist/bundle.js`. 

# Results

The output file (`dist/bundle.js`) is able to import CodeHighlight node without issue: no errors relating to Prism.