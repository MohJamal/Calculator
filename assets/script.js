

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;

}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") { // To return "" instead of zero
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }


}

function getFormattedNumber(num) {
if(num == "-"){
return "";
}


    var n = Number(num); //Convert an object(string) to a number
    var value = n.toLocaleString("en"); //Convert number to a string in English format (9,999)
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, '')); //Replace each (,) with '' => convert 9,999 to 9999
}



var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) { // if output is a number
            output = output + this.id;
            printOutput(output);
        }
    })
}


/*The getElementsByClassName() method returns a collection of all elements 
in the document with the specified class name, as an HTMLCollection object!*/
var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {


            var output = getOutput();
            var history = getHistory();

            if(output == "" && history!=""){
            if(isNaN(history[history.length-1])){
            history = history.substr(0, history.length-1);
            }
            }

            if (output != "" || history != "") {
                output =output=="" ? output : reverseNumberFormat(output);
                history = history + output;

                if (this.id == "=") {
                    var result = Math.round(eval(history));
                    if(isFinite(result)){
                    printOutput(result);
                    printHistory("");}
                    else{
                    alert("Cannot divide by zero.");
                    }
                }
                else{
                   history = history+ this.id;
                   printHistory(history);
                   printOutput(""); 
                }


            }
        



    })
}


var subOperator = document.getElementsByClassName("subOperator");

for (var i = 0; i < subOperator.length; i++) {
    subOperator[i].addEventListener('click', function () {



        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) { // if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } 
    })
}

var curOperator = document.getElementsByClassName("curOperator");

for (var i = 0; i < curOperator.length; i++) {
    curOperator[i].addEventListener('click', function () {
        var output = getOutput();
        var result;

        if (this.id == "SD") {
            result = output*0.29;
       
         
        }
        else if(this.id == "DS"){
            result = output*3.42;
          
        }
        else if(this.id == "SE"){
            result = output*0.25;
          
        }else{
            result = output*4.02;
        
        }
    result= Math.round(result);
    printOutput(result);
    })}