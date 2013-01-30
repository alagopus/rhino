var assert = require("assert");
assert.strictEqual(assert, require("assert"));
assert.strictEqual(assert, require("x/y/mody").assertThroughXAndY);
assert.strictEqual(assert, require("x/y/mody").assertThroughY);
assert.strictEqual(assert, require("x/modx").assertThroughX);
assert.strictEqual(require("x/y/mody").modz, require("x/modx").modz);
assert.strictEqual(require("x/y/mody").modz.success, true);
