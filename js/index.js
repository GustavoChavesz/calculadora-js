const resultText = document.getElementById("resultText")
let calculation = ""

function onNumberClick(number) {
    calculation += number

    resultText.innerText = calculation.replaceAll("*", "x").replaceAll("/", "÷")
}

function onOperatorClick(operator) {
    if (calculation[calculation.length - 2] != operator) {
        calculation += " " + operator + " "
    }

    resultText.innerText = calculation.replaceAll("*", "x").replaceAll("/", "÷")
}

function onEqualClick() {
    if (calculation != "") {
        let result = eval(calculation)

        resultText.innerText = result
        calculation = result
    }
}

function onClearClick() {
    calculation = ""

    resultText.innerText = "0"
}