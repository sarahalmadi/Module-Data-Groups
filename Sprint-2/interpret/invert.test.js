const invert = require("./invert.js");

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts an object with multiple keys", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverting an empty object returns an empty object", () => {
  expect(invert({})).toEqual({});
});
