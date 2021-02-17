
/* Задание 3.
Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом. */
'use strict';

var a = 1;
var b = 3;

function operationsWithNumb (a, b){
    if (a > 0 && b > 0) {
        console.log(Math.abs(a - b));
   } else if (a < 0 && b < 0) {
        console.log(a * b);
   } else{
   console.log(a + b);
   }
   }

operationsWithNumb(a, b)

//switch(a, b) {
//    case a > 0:
//    case b > 0:
//        console.log(Math.abs(a - b));
//        break;
//    case b < 0:
//        console.log(a + b);
//        break;
//    case a < 0:
//    case b < 0:
//        console.log(a * b);
//        break;
//    case b > 0:
//        console.log(a + b);
//    default:
//        console.log('Некорректные данные')
//
//    }