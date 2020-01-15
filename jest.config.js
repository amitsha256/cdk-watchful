module.exports = {
    "roots": [
      "<rootDir>/test",
      "<rootDir>/lib"
    ],
    testMatch: [ '**/*.(test|spec).ts'],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
  }
