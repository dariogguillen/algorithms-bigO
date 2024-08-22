const twoSum = require("../functions/twoSum");

test("Taget 7 not null", () => {
  expect(twoSum([9, 2, 5, 6], 7)).toEqual([1, 2]);
});
test("Taget 100 null", () => {
  expect(twoSum([9, 2, 5, 6], 100)).toBeNull();
});
test("Taget 10 not null", () => {
  expect(twoSum([1, 8, 9, 2, 5, 6], 10)).toEqual([0, 2]);
});
test("Taget 6 not null", () => {
    expect(twoSum([1, 8, 9, 2, 5, 6,1], 2)).toEqual([0, 6]);
  });
