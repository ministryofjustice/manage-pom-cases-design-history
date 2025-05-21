const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = [
  {
    input: "app/_javascripts/application.js",
    output: {
      file: "public/javascripts/application.js",
      format: "iife",
    },
    plugins: [nodeResolve(), commonjs()],
  },
  {
    input: "node_modules/govuk-frontend/dist/govuk/all",
    output: {
      file: "public/javascripts/govuk-frontend.js",
      format: "iife",
    },
    context: "window",
    plugins: [nodeResolve(), commonjs()],
  },
];
