import React from "react";
import Favourites from "../components/Favourites";
import renderer from "react-test-renderer";

const favourites = [
  {
    id: 1,
    artist: "Foo Fighters",
    track: "Everlong",
    image: "image-url",
    url: "url",
  },
];

test("snapshot test", () => {
  const tree = renderer.create(<Favourites favourites={favourites} />).toJSON();
  expect(tree).toMatchSnapshot();
});
