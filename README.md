# MatherJS - Lightweight Mathematics Library

MatherJS is simple lightweigth mathematics library written in TypeScript.

## Methods

+ `isPrime(num: number): boolean` : Check whether the number is prime.
+ `toDoublePrecision(num: number): number` : Makes abnormal JavaScript calculations correct. Eg.: `0.1 + 0.2` gives `0.3` instead of `0.30000000000000004` when passed through this method.
+ `factorsOf(num: number): number[]` : Returns factors of the passed numbers.
+ `factorise(num: number): number[]` : Returns the factorisation of a number.
+ `toBinary(str: string): string` : Returns binary of passed string.
+ `fromBinaryToString(bin: string): string` : Returns text for passed binary.
+ `factorialOf(num: number): number` : Returns factorial of passed number.
+ `nthRoot(num: number, root: number): number` : Retruns factorial value of passed number.
+ `lowestCommonFactor(num1: number, num2: number): number` : Returns LCFactor of passed number.
+ `lowestCommonMultiple(num1: number, num2: number): number` : Returns LCM of passed number.
+ `highestCommonFactor(num1: number, num2: number): number` : Returns HCF of passed number.
+ `randRange(num1: number, num2: number): number` : Returns a random value between supplied range.
+ `fibonacci(num: number): number[]` : A fast and efficient fibonacci method.
+ `degToRadians(deg: number): number` : Converts degrees to radians.
+ `radiansToDeg(rad: number): number` : Converts radians to degress.
+ `average(nums: number[]): number` : Returns average of given numbers.

## Contribution

+ If you have encountered any errors or issues report in the issues panel with a short snippet to recreate the problem.

+ I have run out of ideas of what to add to the library. If you, however, have any ideas, feel free to share in the issues panel. Or if you have implemented the idea yourself, add a pull request and I will be happy to merge it.
