// the itunes api base url
const itunesApi = "https://itunes.apple.com/search";

// searches the itunes api and returns the data
const searchItunes = (term, media = "all") => {
  return fetch(`${itunesApi}?term=${term}&media=${media}`).then((response) =>
    response.json()
  );
};

module.exports = searchItunes;
