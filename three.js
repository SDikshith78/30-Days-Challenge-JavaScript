// 30 Days - JavaScript Challenge

// Day-3

// Task 1 
var a = 11
if(a > 1){
    console.log("Postive");
}
else if(a ===0) {
    console.log("Zero");
}
else{
    console.log("Negative");
}
// Task 2
var age = 18
if(age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Task 3
var b = 11
var c = 21
var d = 8

if(b > c && b > d){
    console.log("b is bigger");
}else if(c > d && c > b){
    console.log("c is bigger");
}else if(d>b && d>c){
    console.log("d is bigger");
}
else {
    console.log("All are same");
}

// Task 4

function Week(day){
    switch(day){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
Week(2)

// Task- 5 
function showGrade(score){
    switch (true) {
        case score >= 80 && score < 100:
            console.log(`According to your score: ${score} grade was "A"`);
            break;
        case score >= 65 && score < 80:
            console.log(`According to your score: ${score} grade was "B"`);
            break;
        case score >= 50 && score < 65:
            console.log(`According to your score: ${score} grade was "C"`);
            break;
        case score >= 40 && score < 50:
            console.log(`According to your score: ${score} grade was "D"`);
            break;
    
        default:
            console.log(`According to your score: ${score} grade was "F"`);
            break;
    }
}
showGrade(30)

// Task - 6 
var a = 21
console.log(a%2==0 ? "even" : "odd");

// Task-7 
function checkLeapYear(year){
    switch (true) {
        case year % 4 == 0 && year % 100 !== 0 || year % 400 == 0:
            console.log(`${year} is leap year`);
            break;
    
        default:
            console.log(`${year} is not leap year`);
            break;
    }
    
}
checkLeapYear(2025)


//Feature Requests are same as Tasks in above


// ------------------ Day 3 Done ---------------------