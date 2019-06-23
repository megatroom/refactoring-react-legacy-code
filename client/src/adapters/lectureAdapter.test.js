import {
  transformSessionToViewModel,
  transformWorkshopToViewModel
} from "./lectureAdapter";
import lectures from "../../mocks/lectures.json";

test("it should transform Session to view model", () => {
  const viewModel = transformSessionToViewModel(lectures.sessions[0]);

  expect(viewModel).toEqual({
    id: 1,
    name: "React Hooks",
    summary: "Lorem ipsum dolor sit amet.",
    isDisabled: false,
    posLabel: "Dan Abramov",
    posHighlight: false,
    actions: [{ label: "Assistir" }]
  });
});

test("it should transform Workshop to view model", () => {
  const viewModel = transformWorkshopToViewModel(lectures.workshops[0]);

  expect(viewModel).toEqual({
    id: 1,
    name: "Refactoring With JavaScript",
    summary:
      "A First Example; Principles in Refactoring; Bad Smells in Code; Building Tests",
    isDisabled: false,
    posLabel: "Martin Fowler",
    posHighlight: false,
    actions: [{ label: "Assistir" }]
  });
});
