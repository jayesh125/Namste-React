import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Components/Body";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// Mocking the fetch() cause it is browser api functionality
// which is not done by jest cause jest usees dummy browser like js DOM
// Which is not call API's
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should sreach res list as input in search input", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardBeforeSearch = screen.getAllByTestId("REScard");
  expect(cardBeforeSearch.length).toBe(20);
//   const searchbtn = screen.getAllByPlaceholderText("Search for restaurants...")

// Searching by testID
  const searchbtn = screen.getByTestId("searchInput");

  fireEvent.change(searchbtn, { target: { value: "m" } });

  const cards = screen.getAllByTestId("REScard");

  expect(cards.length).toBe(10);
});
