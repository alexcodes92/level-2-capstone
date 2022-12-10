import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";

import Search from "./components/Search";
import Button from "react-bootstrap/Button";
import SearchResults from "./components/SearchResults";
import Favourites from "./components/Favourites";

class App extends Component {
  constructor(props) {
    super(props);
    // event handlers for inputs and buttons
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.state = {
      results: [],
      favourites: [],
      error: null,
      showFavourites: false,
    };
  }

  // calls the back end endpoint to get search data
  handleSearch(term, media) {
    fetch(`/search?term=${term}&media=${media}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        ({ results }) => {
          this.setState({
            results,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  // either adds to or removes from the favourites list
  toggleFavourite(result) {
    // check if the search item is in the favourites list by finding it's index
    const favouriteIndex = this.state.favourites.findIndex(
      (favourite) => favourite.id === result.id
    );

    // if the favourite is already in the list then remove it
    if (favouriteIndex > -1) {
      // make a separate copy of the array
      const array = [...this.state.favourites];
      // remove item from array copy
      array.splice(favouriteIndex, 1);
      this.setState({
        favourites: array,
      });
      // if its not in the list then add it
    } else {
      this.setState({
        favourites: this.state.favourites.concat(result),
      });
    }
  }

  render() {
    return (
      <div className="app">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />

        {this.state.showFavourites ? (
          <div>
            <Container>
              <h2 className="mb-4">
                Your favourites!
                <Button
                  className="p-2 ml-4"
                  variant="light"
                  onClick={() => this.setState({ showFavourites: false })}
                >
                  Back to search
                </Button>
              </h2>
            </Container>
            <Favourites
              favourites={this.state.favourites}
              toggleFavourite={this.toggleFavourite}
            />
          </div>
        ) : (
          <div>
            <Container>
              <h2 className="mb-4">
                Search iTunes!
                <Button
                  className="p-2 ml-4"
                  variant="success"
                  disabled={this.state.favourites.length === 0}
                  onClick={() => this.setState({ showFavourites: true })}
                >
                  Your favourites{" "}
                  {this.state.favourites.length !== 0
                    ? `( ${this.state.favourites.length} )`
                    : undefined}
                </Button>
              </h2>
            </Container>
            <Search onSearch={this.handleSearch} />
            <SearchResults
              results={this.state.results}
              favourites={this.state.favourites}
              toggleFavourite={this.toggleFavourite}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
