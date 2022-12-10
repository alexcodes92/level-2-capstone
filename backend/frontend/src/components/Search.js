import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");

  // when the search form is submitted with a search term
  // call the onSearch function passed in from App.js
  const submitSearch = (e) => {
    e.preventDefault();
    if (term.length) {
      onSearch(term, media);
    }
  };

  return (
    <Form id="formName" onSubmit={submitSearch}>
      <Container>
        <Row>
          <Col xs={7}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search term..."
                id="term"
                name="term"
                onChange={(e) => setTerm(e.target.value)}
                className="mb-2"
                value={term}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group>
              <Form.Control
                as="select"
                onChange={(e) => setMedia(e.target.value)}
              >
                <option value="all">Search all type...</option>
                <option value="movie">Movie</option>
                <option value="podcast">Podcast</option>
                <option value="music">Music</option>
                <option value="audiobook">Audiobook</option>
                <option value="shortFilm">Short Film</option>
                <option value="tvShow">TV Show</option>
                <option value="software">Software</option>
                <option value="ebook">ebook</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Button className="w-100" variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Search;
