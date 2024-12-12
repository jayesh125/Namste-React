import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/Store/appStore.js";
import "@testing-library/jest-dom"

it("should render header components with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

//   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();

});

it("should render header components with toggle of login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  //   const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name: "login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "logout"});
  
    expect(logoutButton).toBeInTheDocument();
  
  });