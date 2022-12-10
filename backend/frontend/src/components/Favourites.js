import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchResultCard from "./SearchResultCard";

const Favourites = ({ favourites, toggleFavourite }) => {
  // loops through  the favourites and renders a card for each
  if (favourites.length > 0) {
    return (
      <Container className="mb-4 mt-4">
        <Row>
          {favourites.map((favourite) => {
            return (
              <Col mb={2} xs={6} lg={4} key={favourite.id}>
                <SearchResultCard
                  id={favourite.id}
                  artist={favourite.artist}
                  track={favourite.track}
                  image={favourite.image}
                  url={favourite.url}
                  isFavourited={true}
                  toggleFavourite={toggleFavourite}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }

  // if theres no favourites return this message
  return (
    <Container>
      <p>You have not added anything to your favourites.</p>
    </Container>
  );
};

export default Favourites;
