const isUniqueChar = require("../functions/isUniqueChar");

test("abced should be true", () => {
  expect(isUniqueChar("abced")).toBe(true);
});
test("abcded should be false", () => {
  expect(isUniqueChar("abcded")).toBe(false);
});
test("abacde should be false", () => {
  expect(isUniqueChar("abacde")).toBe(false);
});
test("aaaaaa should be false", () => {
  expect(isUniqueChar("aaaaaa")).toBe(false);
});
test("anfrxhwz should be true", () => {
  expect(isUniqueChar("anfrxhwz")).toBe(true);
});
test("long string should be false", () => {
  expect(
    isUniqueChar(
      "abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    )
  ).toBe(false);
});
