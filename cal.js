
        function Num(value) {
            document.getElementById("display").value += value;
        }

        function calculate() {
            let expression = document.getElementById("display").value;
            try {
                document.getElementById("display").value = eval(expression);
            } catch {
                document.getElementById("display").value = "Error";
            }
        }

        function clearDisplay() {
            document.getElementById("display").value = "";
        }
  