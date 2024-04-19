let greeting = "Hello, World!"; // Assign "Hello, World!" to this variable and print it.
console.log(greeting);

// Assign integer values and perform arithmetic operations.
let num1 = 5, num2 = 10;
console.log(num1 + num2);

//Swap these values without using a new variable.
let a = 1, b = 2;
console.log("Before swapping: a = " + a + ", b = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a = " + a + ", b = " + b);

// Now try assigning a number to it and see what happens.
let message: number = 4; 

// Use the modulus operator (%) to find the remainder.
let num3=2, num4= 10; 
console.log(num4 % num3);

// Increment this value by 1 in two different ways.
let counter = 0;
counter += 1;
counter++;
console.log(counter);

// Write expressions using these.
let c = true, d = false, e = true;
console.log(c && d);
console.log(c || d);
console.log(!e);

// Use +=, -=, *=, and /= on this variable.
let num5 = 10;
num5 += 2;
console.log(num5);
num5 -= 2;
console.log(num5);
num5 *= 2;
console.log(num5);
num5 /= 2;
console.log(num5);


// Determine if this is even or odd.
let num6 = 8;
if(num6 % 2 == 0){
    console.log("Even");
} 
else{
    console.log("Odd");
}

// Check if age is 18 or older to determine voting eligibility.
let age = 19; 
if(age >= 18){
    console.log("Eligible to vote.");
}
else{
    console.log("Not eligible to vote.");
}

// Use conditionals to assign and print grades A, B, C, D, or F.
let score = 85;
if(score >= 90){
    console.log("A");
}
else if(score >= 80){
    console.log("B");
}
else if(score >= 70){
    console.log("C");
}
else if(score >= 60){
    console.log("D");
}
else{
    console.log("F");
}

// Determine the largest among these.
let x = 5, y = 10, z = 15;
if(x > y && x > z){
    console.log(x);
}
else if(y > x && y > z){
    console.log(y);
}
else{
    console.log(z);
}

// Determine if this is a leap year.
let year = 2020;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("Leap year");
        }
        else{
            console.log("Not a leap year");
        }
    }
    else{
        console.log("Leap year");
    }
}

// Convert this to Celsius and print the result.
let fahrenheit = 100;
let celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);


// Determine the sign of this number.
let num7 = -10;
if(num7 > 0){
    console.log("Positive");
}
else if(num7 < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// Print the multiplication table for this number up to 10.
let num8 = 5;
for(let i = 1; i <= 10; i++){
    console.log(num8 + " x " + i + " = " + num8 * i);
}