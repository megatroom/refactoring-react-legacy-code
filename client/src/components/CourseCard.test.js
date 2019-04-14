import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";

import courses from "../../mocks/courses";
import CourseCard from "./CourseCard";

afterEach(cleanup);

test("it should render card with free course", () => {
  const component = render(<CourseCard {...courses[0]} />);

  expect(component.getByText("Curso grátis")).toBeTruthy();
  expect(component.getByText("Grátis")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/começar/i)).toBeTruthy();
});

test("it should render card with paid course", () => {
  const component = render(
    <Router>
      <CourseCard {...courses[1]} />
    </Router>
  );

  expect(component.getByText("Curso pago")).toBeTruthy();
  expect(component.getByText("Preço: R$ 100")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/saber mais/i)).toBeTruthy();
  expect(component.getByText(/comprar/i)).toBeTruthy();
});

test("it should render card with user subscription", () => {
  const component = render(<CourseCard {...courses[2]} />);

  expect(component.getByText("Curso pago com inscrição")).toBeTruthy();
  expect(component.getByText("Progresso: 33%")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/continuar/i)).toBeTruthy();
});

test("it should render card with inactive course", () => {
  const component = render(<CourseCard {...courses[3]} />);

  expect(component.getByText("Curso a ser lançado")).toBeTruthy();
  expect(component.getByText("Em breve...")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/saber mais/i)).toBeTruthy();
});

test("it should render card with canceled course", () => {
  const component = render(<CourseCard {...courses[4]} />);

  expect(component.getByText("Curso cancelado")).toBeTruthy();
  expect(component.getByText("Cancelado")).toBeTruthy();
  expect(component.getByText("Lorem ipsum dolor sit amet.")).toBeTruthy();
  expect(component.getByText(/reativar/i)).toBeTruthy();
});
