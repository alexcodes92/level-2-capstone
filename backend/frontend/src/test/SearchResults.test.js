import React from "react";
import SearchResults from "../components/SearchResults";
import renderer from "react-test-renderer";

const results = [
  {
    trackId: 2,
    artistName: "Foo Fighters",
    trackCensoredName: "Everlong",
    artworkUrl100: "image-url",
    trackViewUrl: "url",
  },
];

test("snapshot test", () => {
  const tree = renderer
    .create(<SearchResults results={results} favourites={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
