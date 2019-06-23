import reducers, { initialState } from "./reducers";
import { GET_LECTURES_SUCCESS, GET_LECTURES_FAIL } from "./actions";

test("it should reduce lectures", () => {
  const action = {
    type: GET_LECTURES_SUCCESS,
    lectures: [{ text: "Object example" }]
  };

  expect(reducers(undefined, action)).toEqual({
    ...initialState,
    lectures: [{ text: "Object example" }]
  });
});

test("it should reduce error from getting lectures", () => {
  const action = {
    type: GET_LECTURES_FAIL,
    error: { message: "error message example" }
  };

  expect(reducers(undefined, action)).toEqual({
    ...initialState,
    lecturesError: { message: "error message example" }
  });
});
