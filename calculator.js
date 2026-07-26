const π = 3.14159;
let screen = document.getElementById("screen");
let answer = null;
function appendScreen(value) {
    if (value === "(") {
        if (document.getElementById("bracket").textContent === "(") {
            document.getElementById("bracket").textContent = ")";
            screen.value += "(";
        }
        else if (document.getElementById("bracket").textContent === ")") {
            document.getElementById("bracket").textContent = "(";
            screen.value += ")";
        }
    }
    else {
        screen.value += value;
    }
    screen.scrollLeft = screen.scrollWidth;
    //  console.log("clicked\n");

}
function deleteLastChar() {
    screen.value = screen.value.slice(0, -1);
    screen.scrollLeft = screen.scrollWidth;
}
function clearScreen() {
    screen.value = "";
    // console.log("cleared");
}
function generateAnswer() {
    try {
        answer = eval(screen.value);
        screen.value = answer;
    }
    catch(error) {
        screen.value = "INVALID INPUT  ";
    }
    screen.scrollLeft = 0;
    // console.log("clicked");
}