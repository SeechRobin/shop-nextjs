import { dataTestIdPrefix } from "./dataTestIdPrefix"

it("should return component name with prefix", async () => {
  const testIdPrefix = dataTestIdPrefix("Component")
  expect(testIdPrefix("test")).toEqual("Component-test")
})
