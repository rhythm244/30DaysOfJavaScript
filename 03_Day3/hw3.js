var firstName = "WASAWAT";
var lastName = "BOURPERK";
var country = "Thailand";
var city = "Bangkok";
var age = 30;
var isMarried = true;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));

console.log('10'==10); //true
console.log('10'===10); //flase

console.log(parseInt('9.8')==10); //parseInt('9.8')=9 -->Fasle
/*
var year = new Date().getFullYear();
console.log(year);

var month  = new Date().getMonth();
console.log(month ); //ได้3 หมายถึงเดือน เม.ย.

var day   = new Date().getDay();
console.log(day); //ได้1 หมายถึงวันจันทร์

var date   = new Date().getDate();
console.log(date); //ได้13 (วันที่13)

var time   = new Date().getTime();
console.log(time); //ได้13 (วันที่13)
*/

//Write a script that prompt the user to enter base and height 
//of the triangle and calculate an area of a triangle 
//(area = 0.5 x b x h).
/*
var base = prompt("Enter base : ");
var height = prompt("Enter height : ");
var area = 0.5*base*height;
alert("triangle area is " + area);
*/

//Slope is (m = y2-y1/x2-x1). Find the slope between point 
//(2, 2) and point(6,10)
// function to find the slope of a straight line 
function linear(x1,y1,x2,y2) 
{ 
    return (y2 - y1) / (x2 - x1); 
} 
  
// driver code to check the above function 
 
    var x1 = 2;
    var y1 = 6; 
    var x2 = 2;
    var y2 = 10;
    console.log("Slope is: " + linear(x1,y1,x2,y2));
 //---------------------------------------------------- 

 //Calculate the value of y (y = x^2 + 6x + 9). Try to use 
 //different x values and figure out at what x value y is 0.

 //var y = (x**2)+(6*x)+9;


function findy(x) 
{ 
    return (x**2)+(6*x)+9; 
}
function findx(y) 
{ 
    return (Math.sqrt(y))-2
}
 length
console.log(findx(80));
//---------------------------------------------------------
//e length of your name is greater than 7 say, your 
//name is long else say your name is short.
/*
var name = prompt("Enter your name : ");
if(name.length>7){
    alert("your name is long");
} else 
alert("your name is short");
*/
//---------------------------------------------------------
console.log(Math.random());
//---------------------------------------------------------

var firstName2 = 'Asabeneh';
var lastName2 = 'Yetayeh';
if(firstName2.length>lastName2.length){
    console.log("Your firstname, " + firstName2 +" is longer than your family name," + lastName2);
}
/* โปรแกรมตรวจสอบอายุว่าเกิน 18 และสามารถมีใบขับขี่ได้หรือไม่
function drive(birth){
    var age = (new Date().getFullYear()) - birth;
    return age;
}
var birth = prompt("Enter your birth year : ")
var age2 = drive(birth);
if(age2>=18){
    alert("You are " + age2 +". You are old enough to drive");
}
    else
    alert("You are "+ age2 +". You will be allowed to drive after" + (18-age2)+" year");
*/

/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
function maxLive(age){
    if(age<100){
        var one = 3153600000/100;
        var live = age*one;
        return alert("You lived "+ live + " seconds");
    } else alert("You can not live more than 100 year ");
}
var age3 = prompt("Enter number of year : ");
maxLive(age3);
*/

const now = new Date();
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

//Exercises: Level 3
//Create a human readable time format using the Date time object. 
//The hour and the minute should be all time two digits(7 hours 
//should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

function unixTime(unixtime) {

    var u = new Date(unixtime);

      return u.getFullYear() +
        '-' + ('0' + u.getMonth()+1).slice(-2) +
        '-' + ('0' + u.getDate()).slice(-2) + 
        ' ' + ('0' + u.getHours()).slice(-2) +
        ':' + ('0' + u.getMinutes()).slice(-2) +
        ':' + ('0' + u.getSeconds()).slice(-2) +
        '.' + (u.getMilliseconds() / 1000).toFixed(3).slice(2, 5) 
    };
var now2 = new Date().getTime();
console.log(unixTime("2020,1,5,10:55:26:46"));
//สำหรับโจทย์ข้อนี้ต้องไปทบทวนเรื่อง slice อีกเยอะเลย 
//-----------------------------------------------------------------------



