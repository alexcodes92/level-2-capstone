# iTunes Search

## Installation

### Backend

Inside the `backend` folder, run the following to install and run the backend.

```
npm install
npm start
```

The backend will run at http://localhost:3001 and has 1 available endpoint: `http://localhost:3001/search?term=Foo%20Fighters&media=music` where `term` is the search term you want to look up and `media` is the media type to search in.

The list of available `media` values can be found here: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW2.

### Frontend

Once the backend is running, move inside the `frontend` folder and run the following to install and run the frontend:

```
npm install
npm start
```

The frontend will run at http://localhost:3000 and display the UI for the app.

## Usage

The UI allows you to enter a search term into the input box, select a media type to query by and perform a search to the iTunes API.

Once you have search results, you'll be able to add search items to your favourites. Once you have items in your favourites, you'll be able to view the full list and also remove items.

## Security

The backend uses HelmetJS to help secure our express app by setting various HTTP headers. More information about HelmetJS can be found here: https://helmetjs.github.io.

The app does not use any API keys.
