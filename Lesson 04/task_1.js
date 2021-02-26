<script>
"use strict";
//Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий
//объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение
//с помощью console.log и вернуть пустой объект.


function transformNum (num) {
    let numLen = num.toString().length; // определить разрядность числа
    var numObj = {};
        switch(numLen){
            case 3:
                numObj.units = num % 10;
                numObj.tens = Math.floor(num / 10) % 10;
                numObj.hundreds = Math.floor(num / 100);
                break;
            case 2:
                numObj.units = num % 10;
                numObj.tens = Math.floor(num / 10) % 10;
                break;
            case 1:
                numObj.units = num;
                break;
             default:
             console.log('Число должно быть от 0 до 999');
                break;
}
     return console.log(numObj);
}

transformNum(316)

</script>
