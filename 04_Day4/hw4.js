//โปรแกรมตรวจสอบอายุว่าเกิน 18 และสามารถมีใบขับขี่ได้หรือไม่
//Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:You are old enough 
//to drive but if not 18 give feedback to wait for the years
//he supposed to wait for.
/*
function drive(birth){
    var age = (new Date().getFullYear()) - birth;
    return age;
}
var age = prompt("Enter your age : ")

if(age>=18){
    alert("You are " + age +". You are old enough to drive");
}
    else
    alert("You are "+ age +". You will be allowed to drive after" + (18-age)+" year");
//------------------------------------------------------------------------------------
*/
/*
function checkNumber(num){
    var numCheck = num;
    num = numCheck%2;
    if(num===0){
        console.log(numCheck + " is an even number.");
    }
    else if(num===1){
        console.log(numCheck + " is is an odd number.")
    }
    else{
        console.log("Bye");
    }
    
}
var num = prompt("Enter a number you want to check : ");
checkNumber(num);
*/

function checkGrade(score) {
  var gc = score;
  if (gc >= 80 && gc <= 100) {
    console.log("Your Grade is A");
  }
  else if (gc >= 70 && gc <= 89) {
    console.log("Your Grade is B");
  }
  else if (gc >= 60 && gc <= 69) {
    console.log("Your Grade is C");
  }
  else if (gc >= 50 && gc <= 59) {
    console.log("Your Grade is D");
  }
  else if (gc >= 0 && gc <= 49) {
    console.log("Your Grade is F");
  }
  else {
    console.log("Bye");
  }

}
//var score = prompt("Enter your score to check : ");
//checkGrade(score);
//-----------------------------------------------------------

// Switch case projrct
/*
let monthUserInput = prompt("What's month in season : ?")
let month = monthUserInput.toLowerCase()

switch (month) {
  case "september": case "october": case "november":
    console.log('This month in Autumn')
    break
  case "december": case "january": case "february":
    console.log('This month in Winter')
    break
  case "march": case "april": case "may":
    console.log('This month in Spring')
    break
  case "june": case "july": case "august":
    console.log('This month in summer')
    break
    
  default:
    console.log('It is not month.')
}
*/
//--------------------------------------------------------------------
/*
let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
for (let key in obj) {
  let value = obj[key];
  console.log(key, value);
}
// key1 value1
// key2 value2
// key3 value3
//---------------------------------------------------------
*/
const workday = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Firday"
}

const weekday = {
  saturday: "Saturday",
  sunday: "Sunday"
}
var dayInput = ""//prompt("What is the day is to day?");
var dayFormat = dayInput.toLowerCase();

for (var key in workday) {
  if (dayFormat == key)
    console.log(workday[key] + " is workday.")
}
for (var key in weekday) {
  if (dayFormat == key)
    console.log(weekday[key] + " is weekday.")
}

//-----------------------------------------------------------

//let dayUserInput = prompt("Enter month : ?")
//let month = dayUserInput.toLowerCase()

function formatMonth1(month) {
  var show = month.split("")
  var jNew = show[0].toUpperCase();
  show.shift();
  var shownew = show.join();
  var janNew = shownew.replace(/,/gi, "")
  console.log(jNew + janNew + " have 31 Days")
}
function formatMonth2(month) {
  var show = month.split("")
  var jNew = show[0].toUpperCase();
  show.shift();
  var shownew = show.join();
  var janNew = shownew.replace(/,/gi, "")
  console.log(jNew + janNew + " have 30 Days")
}

switch (month) {
  //31 days
  case "january": case "march": case "may": case "july":
  case "august": case "october": case "december":
    formatMonth1(month)
    break
  //30 days
  case "april": case "june": case "september": case "november":
    formatMonth2(month)
    break
  case "february" :
    console.log("February have 28 days")
    break
  default:
    console.log('It is not a month.')
}
//--------------------------------------------------------



