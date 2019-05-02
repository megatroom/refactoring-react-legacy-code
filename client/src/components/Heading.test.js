import React from "react";
import { render, cleanup } from "react-testing-library";

import Heading from "./Heading";

afterEach(cleanup);

test("it should render a message", () => {
  const text = "The quick brown fox jumps over the lazy dog";

  const { getByText } = render(<Heading>{text}</Heading>);

  expect(getByText(text)).toBeTruthy();
});
