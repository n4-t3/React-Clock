import { render, screen } from "@testing-library/react";
import Time from "../time.component";

test("Hour rendered properly", () => {
  render(<Time type="Hours" />);
  const hoursText = screen.getAllByText(/^(?:[01]\d|2[0-3])$/);
  expect(hoursText.length).toBeGreaterThanOrEqual(1);
  hoursText.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});

test("Minute rendered properly", () => {
  render(<Time type="Minutes" />);
  const minutesText = screen.getAllByText(/^(?:[0-9]|[1-5][0-9])$/);
  expect(minutesText.length).toBeGreaterThanOrEqual(1);
  minutesText.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});

test("Second rendered properly", () => {
  render(<Time type="Seconds" />);
  const secondsText = screen.getAllByText(/^(?:[0-9]|[1-5][0-9])$/);
  expect(secondsText.length).toBeGreaterThanOrEqual(1);
  secondsText.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
