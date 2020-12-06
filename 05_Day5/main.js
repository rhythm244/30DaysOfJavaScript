import * as thong from './countries.js';
import * as webtech from './web_techs.js';

console.log(thong.countries2[0])

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var textS = text.split(" ")
console.log(textS.length)
console.log(webtech.webTechs)

//ประกาศตัวแปร
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//ถ้าไม่มีเนื้อ ให้เพิ่มเนื้อลงไปหน้าสุด (unshift)
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
//ถ้าไม่มีน้ำตาลให้เพิ่มน้ำตาลลงไปหลังสุด (push)
if (!shoppingCart.includes('sugar')) {
    shoppingCart.push('sugar')
}
//Remove 'Honey' if you are allergic to honey
//ทำให้ทุกตัวใน arr เป็น LowerCase ก่อน ส่วนจะทำอะไรต่อก็แล้วแต่ละกัน
var newShoppingCart = shoppingCart.map(function (item) {
    return item.toLowerCase()
})
//var newShoppingCart = shoppingCart.map(item=>item.toLowerCase())

//change Tea to Green Tea !!
var indexTea = newShoppingCart.indexOf('tea')
newShoppingCart[indexTea] = "Green Tea"

console.log(newShoppingCart)

//In countries array check if 'Ethiopia' exists in the 
//array if it exists print 'ETHIOPIA'. If it does not exist 
//add to the countries list.

let checkEthiopia = thong.countries2.map(item => item.toLowerCase()).includes('ethiopia')
let indexEthiopia = thong.countries2.map(item => item.toLowerCase()).indexOf('ethiopia')
let countiesUpper = thong.countries2.map(item => item.toUpperCase())
if (checkEthiopia)
    console.log(countiesUpper[indexEthiopia])
else thong.countries2.push('ethiopia');

console.log(thong.countries2)
//---------------------------------------------------------------------

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//level 3
const ages = [19, 22, 19, 24, 20, 25, 26,22, 24, 25,100,101,105,107,250,100,2,10]

console.log(ages.sort((a, b) => (a - b)))
var newAges = ages.sort((a, b) => (a - b));
console.log("min " + ages[0], "Max " + ages[ages.length - 1])

//Find the median age(one middle item or two middle items divided by two)

var newAgesMes = newAges.length //ความยาว

let midArr = newAgesMes / 2
let isarrEven = newAgesMes % 2 == 0
if (isarrEven) {
    
    let lMid = newAges[midArr]
    let rMid = newAges[midArr + 1]
    console.log((lMid + rMid) / 2)
}
else {
    var oddIndex = Math.round(newAgesMes/2)
    console.log(newAges[oddIndex])
}
//-------------------------------------------------------

//Find the average age
var dsum = 0;

for(var i=0;i<newAgesMes;i++){
    dsum += newAges[i]
}
var average = dsum/newAgesMes
console.log(average) // หาค่าเฉลี่ย
//--------------------------------------------------------
//Find the range of the ages(max minus min)
console.log(newAges[newAges.length - 1]-newAges[0])
//--------------------------------------------------------
//Compare the value of (min - average) and (max - average), use abs() method
console.log((Math.abs(average-newAges[newAges.length - 1]))-(Math.abs(average-newAges[0])))
//-------------------------------------------------------
