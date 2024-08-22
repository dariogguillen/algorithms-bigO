const getAnagrams = require("../functions/anagrams");

test("get anagrams", () => {
  expect(
    getAnagrams(["saco", "arresto", "programa", "rastreo", "caso"])
  ).toEqual(
    expect.arrayContaining([
      ["saco", "caso"],
      ["arresto", "rastreo"],
      ["programa"],
    ])
  );
});
test("get anagrams 2", () => {
    expect(
      getAnagrams(["resto", "arresto", "rectificable", "rastreo", "retos", "certificable"])
    ).toEqual(
      expect.arrayContaining([
        ["resto", "retos"],
        ["arresto", "rastreo"],
        ["rectificable", "certificable"],
      ])
    );
  });

