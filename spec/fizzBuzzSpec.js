describe("fizzBuzz", function() {

  it("Prints the numbers from 1 to 100", function() {
    console.log = jasmine.createSpy("log");
    Fizzbuzz(100);

    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(98);

  });

  it("Prints Fizz if divisble by 3", function() {
    console.log = jasmine.createSpy("log");
    Fizzbuzz(3);
    expect(console.log).toHaveBeenCalledWith("Fizz");
  });
});

describe("fizzBuzzCheck", function() {

  it("Returns Fizz when divisble by 3", function() {
    expect(FizzBuzzCheck(3)).toEqual("Fizz")
  })

  it("Returns Buzz when divisble by 5", function() {
    expect(FizzBuzzCheck(5)).toEqual("Buzz")
  })

  it("Returns FizzBuzz when divisble by 5", function() {
    expect(FizzBuzzCheck(15)).toEqual("FizzBuzz")
  })

})
