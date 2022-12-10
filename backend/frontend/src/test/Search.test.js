import React from "react";
import Search from "../components/Search";
import renderer from "react-test-renderer";

test("snapshot test", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
