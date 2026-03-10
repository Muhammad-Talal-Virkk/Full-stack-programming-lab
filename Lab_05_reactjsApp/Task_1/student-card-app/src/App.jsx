import StudentCard from "./student_card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information Cards</h1>

      <StudentCard
        name="Ali Khan"
        rollNo="232001"
        department="Software Engineering"
        university="Air University"
        color="#d1e7dd"
      />

      <StudentCard
        name="Sara Ahmed"
        rollNo="232002"
        department="Software Engineering"
        university="Air University"
        color="#cff4fc"
      />

      <StudentCard
        name="Usman Ali"
        rollNo="232003"
        department="Software Engineering"
        university="Air University"
        color="#f8d7da"
      />

    </div>
  );
}

export default App;