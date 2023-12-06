// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = 9;
if (x > 10) {
    console.log("X is greater than 10")

}
else {
    console.log('X is smaller than 10')
}

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const age = 19;
if (age > 18) {
    console.log('You can drive a car');

}
else {
    console.log("you can not drive a car");
}

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const subjectScore = 0;

if (subjectScore > 90 && subjectScore < 100) {
    console.log("Grade A");

}
else if (subjectScore > 80 && subjectScore < 90) {
    console.log("Grade B");

}
else if (subjectScore > 70 && subjectScore < 80) {
    console.log("Grade C");
}
else {
    console.log("Improvment needed");
}

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const currentHour = 6
if (currentHour > 12 && currentHour < 14) {
    console.log("good after noon");
}
else if (currentHour > 5 && currentHour < 12) {
    console.log("Good morning ");

}
else if (currentHour > 14 && currentHour < 20) {
    console.log("good evening");
}
else {
    console.log("good night");
}

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

const day = 1;
switch (day) {
    case 1:
        console.log("sunday");
        break;

    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day")
        break;
}

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

const month = 1;


switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("Feburary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("Invalid month");
        break;
}

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

const fruit = "Kiwi"

switch (fruit) {
    case "Kiwi":
        console.log('Kiwi')
        break;
    case "Apple":
        console.log('Apple')
        break;

    case "Mango":
        console.log('Mango')
        break;

    default:
        console.log("We don't have this fruit")
        break;
}
// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const temperature = 60;

if (temperature >= 0 && temperature <= 30) {
    console.log('low');
} else if (temperature > 30 && temperature <= 60) {
    console.log('Medium');
} else if (temperature > 60 && temperature <= 100) {
    console.log('high');
} else {
    console.log("Temperature Invalid");
}

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

const number = 2;
if (number < 0) {
    console.log("Negative")

}
else if (number>0) {
 console.log("Positive")
}
else if (number%2!=0) {
console.log("Odd")
    
}
else if (number%2==0) {
    console.log("Even")
    
}
else {
    console.log("Invalid number")
}

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

const username = "Anuj";

if (username.length<6) {
    console.log("Username too Short")
    
}
else if  (username.length>=6 && username.length <=15 ) {
    console.log("Username accepted.");
}

else {
    console.log("Username too long");
    
}
