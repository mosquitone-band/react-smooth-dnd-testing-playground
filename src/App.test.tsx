import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App";

beforeAll(() => {});
test("First test", async () => {
  const callback = jest.fn();
  render(<App callback={callback} />);
  const test1 = screen.getByTestId("1");
  const test2 = screen.getByTestId("2");

  await waitFor(() => {
    fireEvent.mouseEnter(test1);
  });
  await waitFor(() => {
    fireEvent.mouseOver(test1);
  });
  await waitFor(() => {
    fireEvent.mouseOver(test1);
  });
  await waitFor(() => {
    fireEvent.mouseDown(test1);
  });
  await waitFor(() => {
    fireEvent.mouseOver(test2);
  });
  await waitFor(() => {
    fireEvent.mouseUp(test2);
  });
  expect(callback).toHaveBeenCalled();
});
