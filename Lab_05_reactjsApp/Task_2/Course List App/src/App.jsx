import CourseItem from "./components/CourseItem";
import "./App.css";

function App() {

  const courses = [
    {courseName: "Web Development", instructor: "Ali", duration: "6 weeks", type:"Online"},
    {courseName: "Database Systems", instructor: "Ahmed", duration: "8 weeks", type:"Offline"},
    {courseName: "Machine Learning", instructor: "Sara", duration: "10 weeks", type:"Online"},
    {courseName: "Software Engineering", instructor: "Usman", duration: "7 weeks", type:"Offline"},
    {courseName: "Cyber Security", instructor: "Fatima", duration: "5 weeks", type:"Online"}
  ];

  return (
    <div>
      <h1>Course List</h1>

      {courses.map((course, index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}

    </div>
  );
}

export default App;