// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = 9;
if (x>10) {
    console.log("X is greater than 10")
    
}
else{
    console.log('X is smaller than 10')
}

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const age= 19;
if (age>18) {
    console.log('You can drive a car');
    
}
else{
    console.log("you can not drive a car");
}

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const subjectScore = 0;

if (subjectScore >90 && subjectScore <100 ) {
    console.log("Grade A");
    
}
else if (subjectScore >80 && subjectScore <90) {
    console.log("Grade B");
    
}
else if (subjectScore >70 && subjectScore <80) {
    console.log("Grade C");
}
else{
    console.log("Improvment needed");
}

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const currentHour = 6
if (currentHour>12 && currentHour< 14) 
{ console.log("good after noon");    
}
else if (currentHour>5&&currentHour<12) {
    console.log("Good morning ");
    
}
else if (currentHour>14 && currentHour<20) {
console.log("good evening");    
}
else{
    console.log("good night");
}

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
