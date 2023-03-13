// Program will take user input with prompt()
// Inputs are numbers
// Outputs will be either Fizz, Buzz or FizzBuzz
// Loop from one until desired number
// Check divisibility by 3 && 5 then write FizzBuzz if 3 Fizz if 5 Buzz 
// else is just print number you imputed

function decideFizzBuzz(numberInput) {
	if (numberInput % 3 == 0 && numberInput % 5 == 0)
		return "FizzBuzz"
	else if (numberInput % 3 == 0)
		return "Fizz"
	else if (numberInput % 5 == 0)
		return "Buzz"
	else
		return numberInput
}

function FizzBuzz(numberInput) {
	let i = 0;
	while (i++ != numberInput) {
		console.log(decideFizzBuzz(i));
	}
}

FizzBuzz(20)
//If the user input needed interface we would use this ⬇️ 
//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));