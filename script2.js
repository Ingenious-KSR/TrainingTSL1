function add() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = num1 + num2;
    alert("The result is "+result);
}

function sub() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    alert("The result is "+result);
}

function mul() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    alert("The result is "+result);
}

function div() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        const result = num1 / num2;
        alert("The result is "+result);
    }
}
