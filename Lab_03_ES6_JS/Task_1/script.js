class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getDetails() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

const student1 = new Student(1, "Baber Ali", 3, ["OOP", "DBMS", "DSA"]);
const student2 = new Student(2, "Ali Ahmedzai", 5, ["AI", "SE", "CN"]);
const student3 = new Student(3, "Hassan Raza  ", 2, ["PF", "Calculus", "Physics"]);

const students = [student1, student2, student3];

let output = "";

students.forEach(student => {
    output += student.getDetails();
});

document.getElementById("studentList").innerHTML = output;