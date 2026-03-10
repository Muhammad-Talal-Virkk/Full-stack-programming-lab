function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Please enter valid numbers!";
        return;
    }

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {

        if (num2 == 0) {
            document.getElementById("output").innerText = "Cannot divide by zero!";
            return;
        }

        result = num1 / num2;
    }

    let output = document.getElementById("output");
    output.innerText = "Result: " + result;

    // Bonus: Change background color
    if (result >= 0) {
        output.style.backgroundColor = "lightgreen";
    } else {
        output.style.backgroundColor = "lightcoral";
    }
}
