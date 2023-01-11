'use strict'

//Відео №1
//Завдання №1
//function showName(){
//	console.log('Вася!');
//}
//setTimeout(showName, 0);
//console.log('Коля!');

//Завдання №3
//showMessage();
//let showMessage = function (){
//	console.log('Повідомлення');
//}

//Завдання №4
//let showMessage
//if (2 > 1) {
//	showMessage = function () {
//		console.log('Повідомлення');
//	}
//}
//showMessage();

//Відео №2
//Завдання №1
//let arr = ['Ваня', 'Іштван', 'Оля',];
//let newArr = arr;
//newArr.push('Петро');
//console.log(arr.length);

//Завдання №2
/*
let users = ['Ваня', 'Іштван',];
users.push('Оля');

function changeName (masWithNames, beforeName, afterName) { 
	if (masWithNames.includes(beforeName)) { 
		let numberItemBeforeName = masWithNames.indexOf(beforeName,);
			masWithNames.splice(numberItemBeforeName, 1, afterName);
			}
	};
changeName(users, 'Іштван', 'Петро');

let removed = users.splice(0, 1)
console.log(removed);

users.splice(0, 0, "Маша", "Паша",)
console.log(users);
*/

//Завдання №3
/*
let removed;
let arr = ['Ваня', 'Іштван', 'Оля',];
function removedName  (masWithNames, delName) { 
	if (masWithNames.includes(delName)) { 
		let numberItemDelName = masWithNames.indexOf(delName);
		removed = masWithNames.splice(numberItemDelName, 1);
			}
	};
	removedName(arr, 'Іштван');
	console.log(removed);
	console.log(arr);
*/

//Завдання №4
/*
let str = 'Ваня, Іштван, Оля';
let mas = str.split(',');
console.log(mas );
*/

//Завдання №5
/*
let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//Відео №3
//Завдання №1
/*
const findDataSayHi = document.querySelector('[data-say-hi]');
const valueDataSayHi = findDataSayHi.getAttribute('data-say-hi');
console.log(valueDataSayHi);
*/

//Завдання №2
/*
const getClassWuthYonchi = document.querySelectorAll('.yonchi>ul>li');
const getYonchi = getClassWuthYonchi[1];
console.log(getYonchi);
*/

//Завдання №3
/*
const colLike = document.querySelectorAll('.like');
console.log(colLike)
*/

//Завдання №4

//Відео №4
//Завдання №1
/*
const mainElement = document.documentElement; 
const widthWithoutScroll = mainElement.clientWidth;
console.log(widthWithoutScroll);
const widthWithScroll = window.innerWidth;
console.log(widthWithScroll);
const scroll = widthWithScroll - widthWithoutScroll;
console.log(scroll);
*/

//Завдання №2
/*
window.scrollTo({ 
	top: 100, 
	let: 0, 
	behavior: "smooth" 
}); 
*/

//Завдання №3
/*
const elem = document.elementFromPoint(50, 0); 
console.log(elem);
const elemOne = document.elementFromPoint(50, 50); 
console.log(elemOne);
const elemTwo = document.elementFromPoint(10, 70); 
console.log(elemTwo);
*/

//Урок 25

const searchForm = document.querySelector('.search-form');
document.addEventListener("click", form);

function form(event) {
	if (event.target.closest('.button')) {
		searchForm.classList.toggle('search-form_active');
	}
	if (!event.target.closest('.form-wrap')) {
		searchForm.classList.remove('search-form_active');
	}
}