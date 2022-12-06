/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "quotes": [
      "error",
      "double"
    ],
    "indent": [
      "error",
     4
    ],
    "linebreak-style": [
      "error",
       "windows"
      ],
      "no-use-before-define":
      ["error",
      {"functions": false, "classes": false, "variables" :false,"allowNamedExports": false}
    ],
      "no-plusplus":
      ["error",
      { "allowForLoopAfterthoughts": true }
    ],
    "no-multiple-empty-lines":
    ["error", { "max": 10, "maxEOF": 0 }
    ],

  },
};
