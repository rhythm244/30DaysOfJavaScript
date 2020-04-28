
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
for(var g=0;g<num;g++){
for(var u=0;u<g;u++){
  console.log("#")
}
console.log("\n")
}

var hh = 10;
for(var h=0;h<hh;h++){
  console.log(h)
}