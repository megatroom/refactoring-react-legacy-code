import { runSaga } from "redux-saga";
import axios from "axios";
import sinon from "sinon";

import {
  GET_LECTURES_SUCCESS,
  GET_LECTURES_FAIL,
  MSG_GET_LECTURES_DEFAULT_ERROR
} from "./actions";
import { onGetLectures } from "./sagas";

afterEach(() => {
  axios.get.restore();
});

test("it should get lectures from server with success", async () => {
  sinon.stub(axios, "get").callsFake(() => ({
    data: { sessions: [], workshops: [] }
  }));

  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    onGetLectures
  ).toPromise();

  expect(dispatched).toEqual([{ type: GET_LECTURES_SUCCESS, lectures: [] }]);
});

test("it should handle error when get lectures fail", async () => {
  sinon.stub(axios, "get").throws("error", "error message");

  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    onGetLectures
  ).toPromise();

  expect(dispatched).toEqual([
    {
      type: GET_LECTURES_FAIL,
      error: { message: MSG_GET_LECTURES_DEFAULT_ERROR }
    }
  ]);
});
