"use strict"

// Task №1

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	console.log('Дискриминант = ' + d);
	if (d < 0) {
		console.log('Корней нет');
	}
	if (d === 0) {
		console.log('Квадратный корень уравнения = ' + (-b / (2 * a)));
	} else if (d > 0) {
		let equationRoots = [];
		equationRoots.push((-b + Math.sqrt(d)) / (2 * a) + ' и ' + (-b - Math.sqrt(d)) / (2 * a));
		console.log('Квадратные корни уравнения = ' + equationRoots);
	}
	return arr;
}
console.log(solveEquation(1, 5, 4));

// Task №2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12; // преобразование диапазона ежемесячной процентной ставки
	payment = (amount - contribution) * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
	return payment.toFixed(2);
}

amount = 5500000, // сумма кредита
	contribution = 4500000, // первоначальный взнос
	percent = 14.9, // процентная ставка
	countMonths = 60; // срок кредита в месяцах

console.log("Общая сумма кредита: " + amount + " руб");
console.log("Взнос: " + contribution + " руб");
console.log("Ставка: " + percent + " %");
console.log("Срок кредита: " + countMonths + " месяцев");
console.log("Ежемесячный платеж: " + calculateTotalMortgage(percent, contribution, amount, countMonths) + " руб");
console.log("Общяя сумма платежа: " + (payment * countMonths).toFixed(2) + " руб");