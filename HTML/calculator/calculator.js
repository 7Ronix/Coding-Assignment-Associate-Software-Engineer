let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0" && value !== "AC") {
        displayValue = value;
    } else if (displayValue === "0" && value === "AC") {
        displayValue = "0";
    } else if (value === "AC") {
        displayValue = "0";
    } else {
        displayValue += value;
    }
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").value = displayValue;
}
