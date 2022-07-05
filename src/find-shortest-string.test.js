// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["hello", "there", "hi", "ah"])).toBe("hi");
  expect(findShortestString(["my", "name", "is", "not", "ella"])).toBe("my");
  expect(findShortestString(["a", "b", "c"])).toBe("a");
});
