const chai = require("chai");
// I read https://www.npmjs.com/package/fetch-mock
// to learn how to mock the fetch call in the module
const fetchMock = require("fetch-mock");

const searchItunes = require("../../itunes");
const expect = chai.expect;

// the url we want to mock
const mockUrl =
  "https://itunes.apple.com/search?term=foo%20fighters&media=music";

describe("searchItunes()", () => {
  afterEach(() => fetchMock.restore());

  it("should return the search data", async () => {
    // mock the call to itunes api
    fetchMock.get(mockUrl, { success: true });

    const data = await searchItunes("foo fighters", "music");

    expect(data).to.deep.equal({ success: true });
  });
});
