import {
  transformSessionToViewModel,
  transformWorkshopToViewModel
} from "../adapters/lectureAdapter";

export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAIL = "AUTH/LOGIN_FAIL";
export const LOGOUT = "AUTH/LOGOUT";
export const REGISTER = "AUTH/REGISTER";
export const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
export const REGISTER_FAIL = "AUTH/REGISTER_FAIL";
export const GET_COURSES = "GET_COURSES";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_FAIL = "GET_COURSES_FAIL";
export const GET_COURSE = "GET_COURSE";
export const GET_COURSE_SUCCESS = "GET_COURSE_SUCCESS";
export const GET_COURSE_FAIL = "GET_COURSE_FAIL";
export const GET_LECTURES = "GET_LECTURES";
export const GET_LECTURES_SUCCESS = "GET_LECTURES_SUCCESS";
export const GET_LECTURES_FAIL = "GET_LECTURES_FAIL";

export const MSG_GET_LECTURES_DEFAULT_ERROR =
  "Ops! Ocorreu um erro inesperado ao carregar a lista.";
export const MSG_GET_LECTURES_DISABLED =
  "Em breve conteúdos novos de eventos e palestras.";

export const onLogin = user => ({
  type: LOGIN,
  user
});

export const onRegister = user => ({
  type: REGISTER,
  user
});

export const onLogout = () => ({ type: LOGOUT });

export const onGetCourses = () => ({
  type: GET_COURSES
});

export const onGetCourse = id => ({
  type: GET_COURSE,
  id
});

export const onGetLectures = () => ({
  type: GET_LECTURES
});

export const onGetLecturesSuccess = ({ sessions, workshops }) => {
  const lectures = [].concat(
    sessions.map(transformSessionToViewModel),
    workshops.map(transformWorkshopToViewModel)
  );

  return { type: GET_LECTURES_SUCCESS, lectures };
};

export const onGetLecturesFail = error => {
  let message = MSG_GET_LECTURES_DEFAULT_ERROR;

  if (error.response && error.response.status === 404) {
    message = MSG_GET_LECTURES_DISABLED;
  }

  return { type: GET_LECTURES_FAIL, error: { message } };
};
