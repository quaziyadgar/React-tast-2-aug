// Write a logic to check whether a number is a prime number or not.

const n = parseInt(prompt("Enter a no to check prime or not"));
console.log(n);
checkPrime(n);

function checkPrime(x)
{
    let prime = true;
    for(let i = 2; i<x/2; i++)
    {
        if(x % i == 0)
        {
            prime = false;
            break;
        }
    }
    if(prime)
    console.log("Prime number");
    else
    console.log("Not a prime number");
}




// FizzBuzz
// div by 3 & 5 -> FizzBuzz
// div by 3 -> Fizz
// div by 5 -> Buzz
// Otherwise -> Number
// Write a loop to print this series from 1 to 200.
const x = parseInt(prompt("Enter a no to check Fizz or Buzz or FizzBuzz"));
console.log(x);
if((x % 3 === 0) && (x % 5 === 0))
console.log("FizBuzz");
else if(x % 3 === 0)
console.log("Fizz");
else if(x % 5 === 0)
console.log("Buzz")
else
console.log("Number");5
