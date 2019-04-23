import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";

import CourseCard from "./CourseCard";

afterEach(cleanup);

test("it should render full course description", () => {
  const component = render(
    <Router>
      <CourseCard
        image="test.png"
        name="Curso de React.js"
        summary="Lorem ipsum dolor sit amet."
        posLabel="Preço: R$ 100"
        actions={[{ label: "Comprar", link: "/payment" }]}
      />
    </Router>
  );

  expect(component.getByText("Curso de React.js")).toBeTruthy();
  expect(component.getByText("Preço: R$ 100")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/comprar/i)).toBeTruthy();
});
