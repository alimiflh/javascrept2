

function all() {

    var num1 = +document.getElementById('num-1').value;
    var num2 = +document.getElementById('num-2').value;
    var num3 = +document.getElementById('num-3').value;

    if ((num1 > num2) && (num1 > num3) && (num2 > num3)) {
        toDiv(num1, num2, num3);
    } else if ((num1 > num2) && (num1 > num3) && (num3 > num2)) {
        toDiv(num1, num3, num2);
    } else if ((num2 > num1) && (num2 > num3) && (num1 > num3)) {
        toDiv(num2, num1, num3);
    } else if ((num2 > num1) && (num2 > num3) && (num3 > num1)) {
        toDiv(num2, num3, num1);
    } else if ((num3 > num1) && (num3 > num2) && (num1 > num2)) {
        toDiv(num3, num1, num2);
    } else if ((num3 > num1) && (num3 > num2) && (num2 > num1)) {
        toDiv(num3, num2, num1);
    }

    function toDiv(a, b, c) {
        document.getElementById("result").innerHTML =  a + " " + b + " " + c;
    }

}