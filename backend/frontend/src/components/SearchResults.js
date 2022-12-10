import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchResultCard from "./SearchResultCard";

const SearchResults = ({ results, favourites, toggleFavourite }) => {
  // loops through the search results and renders card for each
  if (results) {
    return (
      <Container className="mb-4 mt-4">
        <Row>
          {results.map((result) => {
            const isFavourite = favourites.find(
              (favourite) => favourite.id === result.trackId
            );
            return (
              <Col mb={2} xs={6} lg={4} key={result.trackId}>
                <SearchResultCard
                  id={result.trackId}
                  artist={result.artistName}
                  track={result.trackCensoredName}
                  image={result.artworkUrl100}
                  url={result.trackViewUrl}
                  isFavourited={isFavourite !== undefined}
                  toggleFavourite={toggleFavourite}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }

  return null;
};

export default SearchResults;
