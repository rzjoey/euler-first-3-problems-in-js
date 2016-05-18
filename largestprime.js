var isprime = function(number) {
  if (number <= 1) {
    return false;
  }

  var i = 2;

  while (i < number) {
    if (number % 2 === 0) {
      return false;
    }

    i++;
  }

  return true;
};





var i = 1;
var result = 1

while (i < 600851475143) {


  if (isprime(i) === true && 600851475143 % i === 0) {
    var num = i;

    result = num * result;

    if (result === 600851475143) {
      console.log(i);
	break;
    }

  }

  i++;
}
