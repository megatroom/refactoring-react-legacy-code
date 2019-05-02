import React from "react";
import { connect } from "react-redux";

import CourseList from "../../components/CourseList";
import Heading from "../../components/Heading";
import LeadMessage from "../../components/LeadMessage";

import { onGetCourses } from "../../store/actions";

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadCourses();
    this.props.loadLectures();
  }

  render() {
    const { courses, lectures, isLectureDisabled } = this.props;

    return (
      <>
        <Heading>Cursos</Heading>
        <CourseList courses={courses} />
        <Heading>Eventos e Palestras</Heading>
        {isLectureDisabled ? (
          <LeadMessage>
            Em breve conteúdos novos de eventos e palestras.
          </LeadMessage>
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
  isLectureDisabled: false
};

const mapStateToProps = state => ({
  courses: state.courses
});

const mapDispatchToProps = {
  loadCourses: onGetCourses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
