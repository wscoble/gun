module.exports = function (wallaby) {
    return {
      trace: true,
      env: {
        type: "node"
      },
      testFramework: "mocha",
      files: [
        "lib/book.js",
      ],
      tests: [
        "test/lib/book.test.js"
      ]
    };
  };