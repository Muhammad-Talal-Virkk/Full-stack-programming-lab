function CourseItem(props) {
  return (
    <div className="course">
      <h3>{props.courseName}</h3>
      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration}</p>
      <p>Type: {props.type}</p>
    </div>
  );
}

export default CourseItem;