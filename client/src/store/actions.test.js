import lecturesMock from "../../mocks/lectures.json";
import {
  GET_LECTURES,
  GET_LECTURES_SUCCESS,
  GET_LECTURES_FAIL,
  MSG_GET_LECTURES_DEFAULT_ERROR,
  MSG_GET_LECTURES_DISABLED,
  onGetLectures,
  onGetLecturesSuccess,
  onGetLecturesFail
} from "./actions";

test("it should create GET_LECTURES action", () => {
  const action = onGetLectures();

  expect(action).toEqual({
    type: GET_LECTURES
  });
});

test("it should create GET_LECTURES_SUCCESS action", () => {
  const action = onGetLecturesSuccess(lecturesMock);

  expect(action).toEqual({
    type: GET_LECTURES_SUCCESS,
    lectures: [
      {
        actions: [{ label: "Assistir" }],
        id: 1,
        isDisabled: false,
        name: "React Hooks",
        posHighlight: false,
        posLabel: "Dan Abramov",
        summary: "Lorem ipsum dolor sit amet."
      },
      {
        actions: [{ label: "Assistir" }],
        id: 2,
        isDisabled: false,
        name: "React Testing Library",
        posHighlight: false,
        posLabel: "Kent C. Dodds",
        summary: "Lorem ipsum dolor sit amet."
      },
      {
        actions: [{ label: "Assistir" }],
        id: 3,
        isDisabled: false,
        name: "React Router",
        posHighlight: false,
        posLabel: "Ryan Florence",
        summary: "Lorem ipsum dolor sit amet."
      },
      {
        actions: [{ label: "Assistir" }],
        id: 1,
        isDisabled: false,
        name: "Refactoring With JavaScript",
        posHighlight: false,
        posLabel: "Martin Fowler",
        summary:
          "A First Example; Principles in Refactoring; Bad Smells in Code; Building Tests"
      },
      {
        actions: [{ label: "Assistir" }],
        id: 2,
        isDisabled: false,
        name: "Test-Driven Development By Example",
        posHighlight: false,
        posLabel: "Kent Beck",
        summary: "The Money Example; The xUnit Example"
      }
    ]
  });
});

test("it should create GET_LECTURES_FAIL action", () => {
  const action = onGetLecturesFail({});

  expect(action).toEqual({
    type: GET_LECTURES_FAIL,
    error: {
      message: MSG_GET_LECTURES_DEFAULT_ERROR
    }
  });
});

test("it should create GET_LECTURES_FAIL action with 404 error", () => {
  const action = onGetLecturesFail({ response: { status: 404 } });

  expect(action).toEqual({
    type: GET_LECTURES_FAIL,
    error: {
      message: MSG_GET_LECTURES_DISABLED
    }
  });
});
