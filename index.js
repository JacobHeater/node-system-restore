#!/usr/bin/env node

const { createRestorePoint, run } = require('./dist/main.js');

module.exports = { createRestorePoint };

if (require.main === module) {
  run();
}
