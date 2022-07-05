// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["hello", "there", "hi"])).toBe("hello");
  expect(findLongestString(["my", "name", "is", "not", "ella"])).toBe("name");
  expect(findLongestString(["a", "b", "c"])).toBe("a");
});
