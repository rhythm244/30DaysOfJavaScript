
console.log('Open the console and check if the countries has been loaded')

console.log("thong thong from thailand")
//homework day6

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
/*
  for(var i =0;i<10;i++){
    console.log(i+1);
  }
*/
//2. Iterate 10 to 0 using for loop, do the same using while and do while loop

for (var j = 10; j > -1; j--) {
  console.log(j);
}

//3. Iterate 0 to n using for loop
let n = 20;
for (var k = 0; k < n; k++) {
  console.log(k)
}
/*
  4. Write a loop that makes the following pattern using console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
*/
var num = 7;
for (var g = 0; g < num; g++) {
  for (var u = 0; u < g; u++) {
    console.log("#")
  }
  console.log("\n")
}
//test for debug
var hh = 10;
for (var h = 0; h < hh; h++) {
  console.log(h)
}

/*5. Use loop to print the following pattern:

```sh
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```
*/

let loop = 10;
for (t = 0; t <= loop; t++) {
  console.log(t + " x " + t + " = " + t * t)
}
/*
6. Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```
   */
//let loop ไว้แล้วด้านบน
//จริงๆควรทำโดยการใช้ Math สำหรับการยกกำลังจะเท่กว่านี้
console.log("-----------------------------")
for (var c = 0; c <= loop; c++) {
  console.log(c + " " + (c * c) + " " + (c * c * c))
}
console.log("-----------------------------")

//7. Use for loop to iterate from 0 to 100 and print only even numbers
function isEven(even) {
  if (even % 2 === 0)
    return even
  else return 0
}
console.log(isEven(10))
var loop2 = 100;
for (var d = 0; d <= loop2; d++) {
  if (isEven(d))
    console.log(isEven(d))
}
console.log("-----------------------------")

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

function isOdd(odd) {
  if (odd % 2 === 1)
    return odd
  else return 0
}

for (var o = 0; o <= loop2; o++) {
  if (isOdd(o))
    console.log(isOdd(o))
}
console.log("-----------------------------")


//9. Use for loop to iterate from 0 to 100 and print only prime numbers
function test_prime(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
for (var thong = 0; thong <= loop2; thong++) {
  if (test_prime(thong) == true)
    console.log(thong)
}
console.log("-----------------------------")

/*10. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

```sh
The sum all numbers is 5050.
```
*/
let sum = 0

for (var e = 0; e <= 150; e++) {
  sum += e
  if (e == 150)
    console.log("The sum all numbers is " + sum)
}

console.log("-----------------------------")
/*11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens is 2550. And the sum of all odds is 2500.
    ```
*/
var sumOdd = 0
for (var o = 0; o <= loop2; o++) {
  if (isOdd(o)) {
    sumOdd += o
  }
}
console.log(sumOdd)

var sumEven = 0
for (var s = 0; s <= loop2; s++) {
  if (isEven(s)) {
    sumEven += s
  }
}
console.log(sumEven)
console.log("--------------------------")

/*12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
*/
var sumEvenOdd = [sumEven, sumOdd]
console.log(sumEvenOdd)
console.log("--------------------------")

//13. Develop a small script which generate array of 5 random numbers
/*
var randomArr = []
var random1 = 0
for (var b = 0; b < 5; b++) {
  random1 = Math.round(Math.random() * 100)

  randomArr.push(random1)
}
console.log(randomArr)
*/
console.log("--------------------------")

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
var randomArr = []
var random1 = 0
var count = 0

for (var b = 0; (b <= count) && (count < 5); b++) {
  console.log(randomArr.length)

  for (var r = 0; r <= b; r++) {
    random1 = Math.round(Math.random() * 100)
    if (!(randomArr.includes(random1))) {
      randomArr.push(random1)
      count = randomArr.length
      break
    }

  }
}
console.log(randomArr)

//test for in
for (var oo in randomArr) {
  console.log(oo)
}
/*
15. Develop a small script which generate a six characters random id:

    ```sh
    5j2khz
*/
//copy form 3KINGZ solutions
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * chars.length);
  randomChars += chars[random];
}
console.log(randomChars)

let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
  let random = Math.floor(Math.random() * 10);
  if (randomUniqueArr.indexOf(random) === -1) {
    randomUniqueArr.push(random);
  }
}
console.log(randomUniqueArr)

/*1. Develop a small script which generate any number of characters random id:

```sh
fe3jo1gl124g
```

```sh
xkqci4utda1lmbelpkm03rba
```
*/
let randomChars2 = ""
var inputUser = 20
for (let i = 0; i < inputUser; i++) {
  let random = Math.floor(Math.random() * chars.length);
  randomChars2 += chars[random];

}
console.log(randomChars2)

/*1. Write a script which generates a random hexadecimal number.

    ```sh
    '#ee33df'
    ```
hexString = yourNumber.toString(16);
*/
let myNumber = Math.floor(Math.random() * 25000)
var hexString = myNumber.toString(16)
console.log(hexString + "," + "decimal is " + myNumber)

/*
Colors or RGB
Colors in a computer program are represented by combining 3 "pigments". These pigments are Red, Green, and Blue (which contrasts with the "primary" colors we are used to as a child). By combining some amount of Red, some amount of Green, and some amount of Blue, any (displayable) color can be achieved.

RGB Colors
All colors on a computer are made up by combining the light from three colors (red, blue, and green). Black is [0,0,0], and White is [255, 255, 255]; Gray is any [x,x,x] where all the numbers are the same.

The max value of each of the colors is 255. The minimum value is 0.

Colors are almost always written with the Red value first, the Green value second, and the Blue value third. Memorize "RGB" and you will remember the ordering.

Here are some examples:

White = [ 255, 255, 255 ]
Black = [ 0, 0, 0 ]
A "perfect" Blue = [0,0,255]
A "prefect" Red = [255, 0, 0]
A "middle" Gray = [ 122, 122, 122]

1. Write a script which generates a random rgb color number.

    ```sh
    rgb(240,180,80) Math.floor(Math.random()*250)
    ```
*/
let randomRgb = []
for (let v = 0; v < 3; v++) {
  randomRgb[v] = Math.floor(Math.random() * 250)
}
console.log("RGB = " + randomRgb[0] + " " + randomRgb[1] + " " + randomRgb[2])

/*1. Using the above countries array, create the following new array.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```
*/

for (var ooo in countries2) {
  countries2[ooo] = countries2[ooo].toUpperCase()
}
console.log(countries2)

/*1. Using the above countries array, create an array for countries length'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
var len = []
for (let ccc = 0; ccc < countries2.length ; ccc++){
  len.push(countries2[ccc].length)
}
console.log(len)
console.log("---------------------------")




