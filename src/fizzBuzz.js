function Fizzbuzz(number) {
    var i;
    for (i = 1; i <= number; i++) {
      console.log(FizzBuzzCheck(i));
  }
}

function FizzBuzzCheck(i) {
    if (checkDivisibleBy(15, i)) {
      return 'FizzBuzz'
    }
    if (checkDivisibleBy(5, i)) {
      return 'Buzz'
    }
    if (checkDivisibleBy(3, i)) {
      return 'Fizz'
    }
    return i
}

function checkDivisibleBy(divisor, number) {
  return number % divisor === 0;
}
