document.addEventListener("DOMContentLoaded", function () {
        
    // Select the elements
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll('.btn');

    let history = "";

    // Attach event listeners to buttons
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button.textContent);
        });
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            clearAll();
        } else if (value === 'DEL') {
            deleteLastChar();
        } else if (value === '=') {
            evaluateExpression();
        } else if (value=='^'||value=='pow') {
            appendToScreen('**');
            
        }
        else
         {
            appendToScreen(value);
        }
    }

    function clearAll() {
        display.textContent = "";
        history = "";
        updateHistory();
    }

    function deleteLastChar() {
        let currentText = display.textContent;
        display.textContent = currentText.slice(0, -1);
    }

    function appendToScreen(value) {
        display.textContent += value;
    }

    function evaluateExpression() {
        try {
            let expression = display.textContent;
            let result = eval(expression);
            result = parseFloat(result.toFixed(5));
            history += expression + '=' + result + ' ';
            display.textContent = result;
            updateHistory();
        } catch (error) {
            display.textContent = 'Error';
        }
    }

    function updateHistory() {
       
    }

});