import { takeLatest, put, all } from "redux-saga/effects";

import ApiService from "../services/ApiService";
import validation from "../helpers/validation";
import { transformCourseToViewModel } from "../adapters/courseAdapter";
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_COURSE,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAIL,
  GET_COURSES,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./actions";

function* onLogin(action) {
  const { user } = action;
  const { login, password } = user;
  const validationError = {};
  let hasValidationError = false;

  if (validation.isNullOrEmpty(login)) {
    hasValidationError = true;
    validationError.login = "Campo obrigatório";
  }

  if (validation.isNullOrEmpty(password)) {
    hasValidationError = true;
    validationError.password = "Campo obrigatório";
  }

  if (hasValidationError) {
    yield put({ type: LOGIN_FAIL, validation: validationError });
  } else {
    try {
      const response = yield ApiService().signin(user);
      yield put({ type: LOGIN_SUCCESS, user: response.data });
    } catch (error) {
      yield put({
        type: LOGIN_FAIL,
        validation: { login: validation.getMessageFromError(error) }
      });
    }
  }
}

function* onRegister(action) {
  const { user } = action;
  const { name, login, password } = user;
  const validationError = {};
  let hasValidationError = false;

  if (validation.isNullOrEmpty(name)) {
    hasValidationError = true;
    validationError.name = "Campo obrigatório";
  }

  if (validation.isNullOrEmpty(login)) {
    hasValidationError = true;
    validationError.login = "Campo obrigatório";
  }

  if (validation.isNullOrEmpty(password)) {
    hasValidationError = true;
    validationError.password = "Campo obrigatório";
  }

  if (validation.minLength(password, 4)) {
    hasValidationError = true;
    validationError.password = "Senha deve conter mais de 4 caracteres";
  }

  if (hasValidationError) {
    yield put({ type: REGISTER_FAIL, validation: validationError });
  } else {
    try {
      const response = yield ApiService().signup(user);
      yield put({ type: REGISTER_SUCCESS, user: response.data });
    } catch (error) {
      yield put({
        type: REGISTER_FAIL,
        validation: { login: validation.getMessageFromError(error) }
      });
    }
  }
}

function* onGetCourses() {
  try {
    const response = yield ApiService().getCourses();

    const courses = response.data.map(transformCourseToViewModel);

    yield put({ type: GET_COURSES_SUCCESS, courses });
  } catch (error) {
    yield put({ type: GET_COURSES_FAIL, message: error.message });
  }
}

function* onGetCourse(action) {
  try {
    const response = yield ApiService().getCourse(action.id);
    yield put({ type: GET_COURSE_SUCCESS, course: response.data });
  } catch (error) {
    yield put({ type: GET_COURSE_FAIL, message: error.message });
  }
}

function* sagas() {
  yield all([
    takeLatest(REGISTER, onRegister),
    takeLatest(LOGIN, onLogin),
    takeLatest(GET_COURSES, onGetCourses),
    takeLatest(GET_COURSE, onGetCourse)
  ]);
}

export default sagas;
