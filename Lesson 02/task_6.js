/* Задание 6.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения
аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из
арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch). */
'use strict';

function mathOperation(arg1, arg2, operation){
switch(operation){
    case '+':
        console.log(arg1 + arg2);
        break;
    case '-':
        console.log(arg1 - arg2);
        break;
    case '/':
        console.log(arg1 / arg2);
        break;
    case '*':
        console.log(arg1 * arg2);
        break;
    default:
        console.log('Неверная операция. Доступны +, -, *, /');}
}

mathOperation(2, 3, '+')