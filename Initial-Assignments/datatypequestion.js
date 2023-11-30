// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

let Distance = 78
let Meter = Distance * 1000;
let Centimeter = Distance * 100000;
console.log(`Distance in meters is ${Meter} meters and in ${Centimeter} centimeters`);

//Question-2:    WAP to input radius of a circle and log the area of circle.

const radius = 7
const area = 3.14*radius**2
console.log(`The radius of the of circle is ${area} *`)

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

let number1 = 2
let number2 = 3

const  addition = number1 + number2;
const  substraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const mod  = number1 % number2;
const exponential =  number1**number2;
console.log("Addition :",addition);
console.log("Substraction :",substraction);
console.log("Division :",division);
console.log("Multiplication :",addition);
console.log("Modulus :",addition);
console.log("Exponential :",addition);


//Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

let Math = 90;
let Science =  80;
const total = Math+Science
const percentage = total/200 *100
console.log(`The total marks obtain by the student ${total} and the percentage is ${percentage} .`);


// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const length = 4;
const  breath = 7;
const Aear = length*breath ;
const parimeter = 2*length + 2*breath ;
console.log(`The area of the of rectangle ${Aear} and parimeter is ${parimeter} .`);

//Question-6:    WAP to input n numbers and log the average of those number.

const numbers  = [2,4,45,5,5,5,5,5,5,5];
const average = (numbers)=>{
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
        
    });
    return sum/numbers.length;
}


console.log(`Average : ${average(numbers)}`);

//Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
const distanceInKm = 10;
const distanceInMeter = distanceInKm * 1000;
const distanceInFeet = distanceInMeter * 3.5;
const distanceInInches = distanceInFeet * 12;
const distanceInCentimeter  = distanceInMeter * 100;

console.log("Distance in km " + distanceInKm);
console.log("Distance in Meter " + distanceInMeter);
console.log("Distance in Centimeter " + distanceInCentimeter);
console.log("Distance in feet " + distanceInFeet);
console.log("Distance in inches " + distanceInInches); 


//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperatureInFahrenheit = 100;
const temperatureInCentigrade = (temperatureInFahrenheit-32)*5/9;
console.log("Temperature in centigrade is :" + temperatureInCentigrade);

//Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = 135;
const price = 350;

const calculateAmount = (quantity,price)=>{
    return quantity*price;
}
const discountedAmount = (quantity,price) =>{
    return calculateAmount(quantity,price)*10/100;
}
const amountAfterDiscount = (quantity,price)=>{
    return calculateAmount(quantity,price) - discountedAmount(quantity,price);
}
console.log("The actual amount of the product is :" + calculateAmount(quantity,price));
console.log("Discount Amount is : " + discountedAmount(quantity,price));
console.log("Amount after applying the discount :" + amountAfterDiscount(quantity,price));

//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmount = 100;
const interest = 4
const numberOfYear= 8
const simpleInterest = (principalAmount,interest,numberOfYear)=>{
    return (principalAmount*interest*numberOfYear)
}
console.log(`Simple interest is : ${simpleInterest(principalAmount,interest,numberOfYear)}`);
