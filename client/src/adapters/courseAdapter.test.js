import { transformCourseToViewModel } from "./courseAdapter";
import courses from "../../mocks/courses.json";

test("it should render card with free course", () => {
  const viewModel = transformCourseToViewModel(courses[0]);

  expect(viewModel).toEqual({
    id: 1,
    name: "Curso grátis",
    summary: "Lorem ipsum dolor sit amet.",
    image: "teste.png",
    isDisabled: false,
    posLabel: "Grátis",
    posHighlight: true,
    actions: [{ label: "Saber mais" }, { label: "Começar" }]
  });
});

test("it should render card with paid course", () => {
  const viewModel = transformCourseToViewModel(courses[1]);

  expect(viewModel).toEqual({
    id: 2,
    name: "Curso pago",
    summary: "Lorem ipsum dolor sit amet.",
    image: "teste.png",
    isDisabled: false,
    posLabel: "Preço: R$ 100",
    posHighlight: true,
    actions: [
      { label: "Saber mais" },
      { label: "Comprar", link: "/payment/course/2" }
    ]
  });
});

test("it should render card with user subscription", () => {
  const viewModel = transformCourseToViewModel(courses[2]);

  expect(viewModel).toEqual({
    id: 3,
    name: "Curso pago com inscrição",
    summary: "Lorem ipsum dolor sit amet.",
    image: "teste.png",
    isDisabled: false,
    posLabel: "Progresso: 33%",
    posHighlight: false,
    actions: [{ label: "Continuar" }]
  });
});

test("it should render card with inactive course", () => {
  const viewModel = transformCourseToViewModel(courses[3]);

  expect(viewModel).toEqual({
    id: 4,
    name: "Curso a ser lançado",
    summary: "Lorem ipsum dolor sit amet.",
    image: "teste.png",
    isDisabled: true,
    posLabel: "Em breve...",
    posHighlight: false,
    actions: [{ label: "Saber mais" }]
  });
});

test("it should render card with canceled course", () => {
  const viewModel = transformCourseToViewModel(courses[4]);

  expect(viewModel).toEqual({
    id: 5,
    name: "Curso cancelado",
    summary: "Lorem ipsum dolor sit amet.",
    image: "teste.png",
    isDisabled: true,
    posLabel: "Cancelado",
    posHighlight: false,
    actions: [{ label: "Reativar" }]
  });
});
