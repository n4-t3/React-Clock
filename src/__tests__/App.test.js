import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test('App component renders with the "App" class', () => {
  render(<App />);
  const appElement = document.getElementsByClassName("App");
  expect(appElement.length).toBe(1);
});
