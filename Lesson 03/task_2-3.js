/* Задание 2 - 3.
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

Товары в корзине хранятся в массиве. Задачи:
  -Организовать такой массив для хранения товаров в корзине;
  -Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

"use strict";

const basket = [
    {
      id_product: 123,
      product_name: "Ноутбук",
      price: 45600,
      quantity: 1
    },
    {
      id_product: 456,
      product_name: "Мышка",
      price: 1000,
      quantity: 1
    }
  ];

function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i].price;
     }
     return totalPrice;
   }
console.log(countBasketPrice(basket));