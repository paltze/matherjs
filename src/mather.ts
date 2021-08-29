//MatherJS Mathematics Library

const Mather = {
    //Function Checking Prime Number
    isPrime: (num: number): boolean => {
        //General Variables
        let i: number;
        let prime: boolean = true;
        
        //If number passed is 0 or 1 return true as 0 and 1 are not prime
        if (num == 0 || num == 1) {
            return false;
        }
        //If  number are 2 & 3 return true as the loop return false
        else if (num == 2 || num == 3) {
            return true;
        }
        else {
            //Run till half the number
            for (i = 1; i < (num / 2); i++) {
                //Check if any number is divisible starting from 2
                if (num % (i + 1) == 0) {
                    //If yes change var to false
                    prime = false;
                }
            }
            return prime;
        }
    },

    //To Double Precision
    toDoublePrecision: (num: number, length?: number): number => {
        //Store passed values
        const preciseNum: number = num;
        let len: number = length;

        //Set default length to 10
        if (length === undefined) {
            len = 10;
        }
        //Return to preciseNum with toPrecision lenght till specified and evaluate with '/1' to remove trailing zeroes
        const numWithZero: number = Number(preciseNum.toFixed(len));
        return numWithZero / 1;
    },

    //Function listing the Factors of a number
    factorsOf: (num: number): number[] => {
        //General Variable
        let i: number;
        let factors: number[] = [];

        //Loop for running half the number
        for (i = 0; i < (num / 2); i++) {
            //Checking if a number is completely divisibe (always including 1)
            if (num % (i + 1) === 0) {
                //If yes push the number
                factors.push(i + 1);
            }
        }
        //Push the original number as factor and return the array
        factors.push(num);
        return factors;
    },

    //Return all factors of a number
    factorise: (num: number): number[] => {
        //Variables
        let i: number = 1;
        let temp: number = num;
        let result: number[] = [1];
        
        //If the number is prime return that
        if (Mather.isPrime(num)) {
            result.push(num);
        }
        else {
            //Run until broken
            while(true) {
                //Break when divided completely
                if (temp === 1) {
                    break;
                }

                i++;

                //If divisible save the number, divide and reset i
                if (temp % i === 0) {
                    result.push(i);
                    temp /= i;
                    i = 1;
                }
            }
        }
        return result;
    },

    //Convert to Binary
    toBinary: (str: string): string => {
        let i: number;

        //Storing the Binary
        let binary: string = "";
        const text: string = str;

        //Loop for converting every character to binary
        for (i = 0; i < text.length; i++) {
            //Adding binary + space for every character
            binary += text[i].charCodeAt(0).toString(2) + " ";
        }
        return binary;
    },

    //Convert from Binary to String
    fromBinaryToString: (str: string): string => {
        let i: number;
        let result: string = "";

        //Converting the entered binary into a array of them
        const chars: string[] = str.split(/\s/);

        //Converting them and adding together
        for (i = 0; i < chars.length; i++) {
            result += String.fromCharCode(parseInt(chars[i], 2));
        }
        return result;
    },

    //Factorial
    factorialOf: (num: number): number => {
        let i: number;
       //Initially set factorial as num
        let factorial = num;

        //Run loop as much as num starting from i = 1
        for (i = 1; i < num; i++) {
            //Factorial is factorial * the number starting of 1 (i) increasing every time
            factorial = factorial * i;
        }
        return factorial;
    },

    //Calculate the nth root of a number
    nthRoot: (num: number, root: number): number =>
        //Just return the number with using Math.pow with exponent as 1/num and passing through DoublePrecision
        Mather.toDoublePrecision(Math.pow(num, 1/root)),

    //Calculate the Lowest Common Factor of two numbers
    lowestCommonFactor: (num1: number, num2: number): number => {
        //Some variables
        let i: number = 0;
        let ans: number;

        //Run until broken
        while (true) {
            //Add 1 to i every time
            i++
            //If i is divisible by both number store i and break the loop
            if (num1 % i == 0 && num2 % i == 0) {
                ans = i;
                break;
            }
        }
        return ans;
    },

    //Calculate the Lowest Common Multiple of two numbers
    lowestCommonMultiple: (num1: number, num2: number): number => {
        //Some variables
        let i: number = 0;
        let ans: number;

        //Run until broken
        while(true) {
            i++
            //Store a number multiplied by num1
            let check: number = num1 * i;
            //Check if it is also divisible with num2, if yes store it and break
            if (check % num2 == 0) {
                ans = check;
                break;
            }
        }
        return ans;
    },

    //Calculate the highest common factor of two numbers
    highestCommonFactor: (num1: number, num2: number): number => {
        //Create variables for numbers and set val1 as smaller and val2 as greater
        let val1: number = Math.min(num1, num2);
        let val2: number = Math.max(num1, num2);

        //Set i as first number + 1 and initialize ans
        let i: number = val1 + 1;
        let ans: number = 0;

        //Run until not broken
        while(true) {
            //Decrease i by 1 (increased by 1 once)
            --i;
            //Check if number is divisible by both numbers, if yes ans is i and break the loop
            if (val2 % i == 0 && val1 % i == 0) {
                ans = i;
                break;
            }
        }
        return ans;
    },

    //Generate a random value from given range
    randRange: (num1: number, num2: number): number => {
        //Seperate min and max
        const min: number = Math.ceil(Math.min(num1, num2));
        const max: number = Math.floor(Math.max(num1, num2));

        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    //Generate fibonacci sequence numbers
    fibonacci: (num: number): number => {

        //Create an array with numbers
        let nums: number[] = [0, 1, 1];

        //Generate fibonacci numbers until the number
        for (let i: number = 3; i < num + 1; i++) {
            nums.push(nums[i - 2] + nums[i - 1]);
        }

        //Return fibonacci number
        return nums[num];
    },  

    //Return degrees in radians
    degToRadians: (num: number): number => Mather.toDoublePrecision(num * (Math.PI/180)),

    //Return radians in degrees
    radiansToDeg: (num: number): number => Mather.toDoublePrecision(num * (180 / Math.PI))
};