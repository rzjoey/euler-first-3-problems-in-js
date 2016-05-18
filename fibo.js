var result = 0;

var array = [1, 2];

var i = 0;

while (true) {

	var nextNum = array[i] + array[i+1];
	
		if (nextNum < 4000000) {
			array.push(nextNum);
		} else {
			break;
	}

	i++;
}

console.log(array);

for (var i = 0; i < array.length; i++) {

	if (array[i] % 2 === 0) {
		result += array[i];
	}
}

console.log(result);