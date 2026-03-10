function checkQuiz() {

    let score = 0;

    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;

    if (q1 == "4") {
        score++;
    }

    if (q2.toLowerCase() == "islamabad") {
        score++;
    }

    if (q3.toLowerCase() == "web development") {
        score++;
    }

    let message = "";

    if (score == 3) {
        message = "Excellent! Full Marks!";
    } else if (score == 2) {
        message = "Good Job!";
    } else {
        message = "Try Again!";
    }

    document.getElementById("result").innerText =
        "Your Score: " + score + "/3 - " + message;
}

function resetQuiz() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("result").innerText = "";
}
