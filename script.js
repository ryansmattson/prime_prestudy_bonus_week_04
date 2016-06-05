function number1(x) {
	return x * 5;
};

function number2(x) {
	x = x + 50;
	x = x * 3;
	return x;
};

function number3(x) {
	return x * 10;
};

console.log(number1(number2(number3(5))));


var splinter = function (number1, number2){
	var z = number1 * number2;
	var newArray = [number1, number2, z];
	return newArray;
}

console.log(splinter(1, 2));
