import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SearchResultCard = ({
  id,
  artist,
  image,
  track,
  url,
  isFavourited = false,
  toggleFavourite,
}) => {
  const [favourited, setFavourited] = useState(isFavourited);

  // when the favourites button is clicked toggle the favourited state
  // and call the toggleFavourite function passed in from App.js
  const onClickFavourites = () => {
    setFavourited(!favourited);
    toggleFavourite({
      id,
      artist,
      image,
      track,
      url,
    });
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Link target="_blank" href={url}>
          <Card.Title>{track}</Card.Title>
        </Card.Link>
        <Card.Subtitle className="mb-4">{artist}</Card.Subtitle>
        <Button
          className="p-2"
          variant={favourited ? "danger" : "light"}
          onClick={onClickFavourites}
        >
          {favourited ? "Remove from favourites" : "Add to favourites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SearchResultCard;
