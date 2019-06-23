import axios from "axios";

const ApiService = () => {
  const baseURL = "http://localhost:9000";

  return {
    signin: user => axios.post(`${baseURL}/signin`, { user }),

    signup: user => axios.post(`${baseURL}/signup`, { user }),

    getCourse: id => axios.get(`${baseURL}/courses/${id}`),

    getCourses: () => axios.get(`${baseURL}/courses`),

    getLectures: () => axios.get(`${baseURL}/lectures`)
  };
};

export default ApiService;
