const resultText = document.getElementById("resultText")
let calculation = ""

function onNumberClick(number) {
    calculation += number

    resultText.innerText = calculation.replace("*", "x")
}

function onOperatorClick(operator) {
    calculation += " " + operator + " "

    resultText.innerText = calculation.replace("*", "x")
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