const index = require("../lib/scripts/index");

console.log(index)
test('adds 1 + 2 to equal 3', () => {
    expect(index.sum(1, 2)).toBe(3);
});