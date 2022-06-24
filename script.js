var operation = window.prompt("Enter Operation To Be Performed: \n ' + ' ,      ' - ' ,     ' * ' ,     ' / ' ,      or    ' % ' ");
var num1 = window.prompt("Enter First Number:");
var num2 = window.prompt("Enter Second Number:");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if  (operation == '+'){
    alert(num1 + num2);
}
else if  (operation == '-'){
    alert(num1 - num2);
}
else if  (operation == '*'){
    alert(num1 * num2);
}
else if  (operation == '/'){
    alert(num1 / num2);
}
else if  (operation == '%'){
    alert(num1 % num2);
}




