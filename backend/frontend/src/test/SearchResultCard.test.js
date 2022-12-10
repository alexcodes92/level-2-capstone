// I had an error with expect(..).toBeInTheDocument is not a function
// https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function helped me here
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchResultCard from "../components/SearchResultCard";

const cardProps = {
  id: 1,
  artist: "Blink 182",
  image: "image-url",
  track: "All the small things",
  url: "url",
  isFavourited: false,
};

test("information inside SearchResultCard", () => {
  render(<SearchResultCard {...cardProps} />);
  const artistElement = screen.getByText(/Blink 182/i);
  const trackElement = screen.getByText(/All the small things/i);
  expect(artistElement).toBeInTheDocument();
  expect(trackElement).toBeInTheDocument();
});
