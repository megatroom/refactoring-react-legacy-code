import React from "react";
import { render, cleanup } from "react-testing-library";

import LeadMessage from "./LeadMessage";

afterEach(cleanup);

test("it should render a message", () => {
  const text = "The quick brown fox jumps over the lazy dog";

  const { getByText } = render(<LeadMessage>{text}</LeadMessage>);

  expect(getByText(text)).toBeTruthy();
});
