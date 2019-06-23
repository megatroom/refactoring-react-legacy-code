import React from "react";
import { connect } from "react-redux";

import CourseList from "../../components/CourseList";
import Heading from "../../components/Heading";
import LeadMessage from "../../components/LeadMessage";

import { onGetCourses, onGetLectures } from "../../store/actions";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadCourses();
    this.props.loadLectures();
  }

  render() {
    const { courses, lectures, lecturesError } = this.props;

    return (
      <>
        <Heading>Cursos</Heading>
        <CourseList courses={courses} />
        <Heading>Eventos e Palestras</Heading>
        {lecturesError ? (
          <LeadMessage>{lecturesError.message}</LeadMessage>
        ) : (
          <CourseList courses={lectures} />
        )}
      </>
    );
  }
}

HomePage.defaultProps = {
  loadCourses: () => {},
  loadLectures: () => {},
  courses: [],
  lectures: [],
  lecturesError: null
};

const mapStateToProps = state => ({
  courses: state.courses,
  lectures: state.lectures,
  lecturesError: state.lecturesError
});

const mapDispatchToProps = {
  loadCourses: onGetCourses,
  loadLectures: onGetLectures
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
