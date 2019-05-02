import React from "react";
import { render, cleanup } from "react-testing-library";

import { HomePage } from "./HomePage";

afterEach(cleanup);

test("it should render a list of courses", () => {
  const courses = [
    { id: 1, name: "React Course", actions: [{ label: "Comprar" }] }
  ];

  const { getByText } = render(<HomePage courses={courses} />);

  expect(getByText("React Course")).toBeTruthy();
  expect(getByText(/comprar/i)).toBeTruthy();
});

test("it should call loadCourses on mounting", () => {
  const loadCourses = jest.fn();

  render(<HomePage loadCourses={loadCourses} />);

  expect(loadCourses.mock.calls.length).toBe(1);
});

test("it should render the titles of the lists", () => {
  const { getByText } = render(<HomePage />);

  expect(getByText("Cursos")).toBeTruthy();
  expect(getByText("Eventos e Palestras")).toBeTruthy();
});

test("it should render a list of lectures", () => {
  const lectures = [
    { id: 5, name: "Node in Action", actions: [{ label: "Comprar" }] }
  ];

  const { getByText } = render(<HomePage lectures={lectures} />);

  expect(getByText("Node in Action")).toBeTruthy();
  expect(getByText(/comprar/i)).toBeTruthy();
});

test("it should show lecture disabled message", () => {
  const { getByText } = render(<HomePage isLectureDisabled />);

  expect(
    getByText("Em breve conteúdos novos de eventos e palestras.")
  ).toBeTruthy();
});

test("it should call loadLectures on mounting", () => {
  const loadLectures = jest.fn();

  render(<HomePage loadLectures={loadLectures} />);

  expect(loadLectures.mock.calls.length).toBe(1);
});
