class CalculatorComponent extends Component {
    constructor(options) {
        super(options);

        let a, b, operand;
        let numbers = document.querySelectorAll('.number');
        for (let i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener('click', numberclick)
        }
        let operands = document.querySelectorAll('.operand')
        for (let i = 0; i < operands.length; i++) {
            operands[i].addEventListener('click', operandclick)
        }

        function numberclick(event) {
            document.getElementById('input').value = this.dataset.num;
        }

        function operandclick(event) {
            var input = document.getElementById('input');
            switch (this.dataset.operand) {
                case "plus":
                    a = input.value - 0;
                    operand = 'plus';
                    input.value = '';
                    break;

                case "minus":
                    a = input.value - 0;
                    operand = 'minus';
                    input.value = '';
                    break;
                case "multiplication":
                    a = input.value - 0;
                    operand = "multiplication";
                    input.value = "";
                    break;

                case "division":
                    a = input.value - 0;
                    operand = "division";
                    input.value = "";
                    break;
                case "Degree":
                    a = input.value - 0;
                    operand = "Degree";
                    input.value = "";
                    break;
                case "delete":
                    a = input.value - 0;
                    operand = "delete";
                    input.value = "";

                case "calculate":

                    if (operand) {
                        b = input.value - 0;

                        if (operand === 'plus') {
                            input.value = a + b;
                        }

                        if (operand === 'minus') {
                            input.value = a - b;
                        }
                        if (operand === "multiplication") {
                            input.value = a * b;
                        }
                        if (operand === "division") {
                            input.value = a / b;
                        }
                        if (operand === "Degree") {
                            input.value = a ** b;
                        }
                        if (operand === "delete") {
                            input.value = null;
                        }

                        operand = null;
                    }
                    break;

            }
        }
    }
}

