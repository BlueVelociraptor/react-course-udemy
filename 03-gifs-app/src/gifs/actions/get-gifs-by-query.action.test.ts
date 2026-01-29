import { beforeEach, describe, expect, test } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../../tests/mock/giphy.response.data";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });

  test("Should return a list of GIFs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("Husky");

    expect(gifs.length).toBe(25);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });

  test("Should return an empty list of GIFs when query parameter isn't provided", async () => {
    const gifs = await getGifsByQuery("");
    expect(gifs.length).toBe(0);
  });

  test("Should handle error when the API returns an error", async () => {
    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad Request",
      },
    });

    const gifs = await getGifsByQuery("Husky");
    expect(gifs.length).toBe(0);
  });
});
