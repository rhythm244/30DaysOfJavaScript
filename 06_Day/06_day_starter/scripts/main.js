
console.log('Open the console and check if the countries has been loaded')

console.log("thong thong 555")
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
function isEven(number) {
  if (number % 2 === 0)
    return number
  else return 0
}
console.log(isEven(10))
var loop2 = 100;
for (var d = 0; d <= loop2;d++) {
  if(isEven(d))
  console.log(isEven(d))
}