console.log("hello");
var rd = Math.random();
console.log(rd);

var rdoneh = rd*100;
console.log(rdoneh);

var rdonehfloor = Math.floor(rdoneh);
console.log(rdonehfloor);

//Generate a random number between 0 and 255 inclusive.
var max = 255;
var min = 0;
var rdonehfloorbet = Math.floor(Math.random() * (max - min +1)) + min;
console.log(rdonehfloorbet);

//ค่า PI
var p = Math.pi;
console.log(p);


//Access the 'JavaScript' string characters using a random number.
//3บรรทัดนี้เป็นวิธีคิด
/*
var ja = "JavaScript";
for(i=0;i<ja.length;i++){
console.log(ja.charAt(i));
*/

var max2 = 9;
var min2 = 0;
var rdonehfloorbet2 = Math.floor(Math.random() * (max2 - min2 +1)) + min2;
console.log(rdonehfloorbet2);

var ja = "JavaScript";
console.log(ja.charAt(rdonehfloorbet2));

//Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1\n2 2 2 2\n3 3 3 3\n4 4 4 4");

//Use substr to slice out the phrase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var thong = "You cannot end a sentence with because because because is a conjunction";
console.log(thong.indexOf("because"));
console.log(thong.length);
var pettern = 0;
var thong1 = thong.substr(0,31);
var thong2 = thong.substr(51,71);

console.log(thong1+thong2);

/*
Code จาก Stack overflow
String.prototype.deleteWord = function (searchTerm) {
var str = this;
var n = str.search(searchTerm);
while (str.search(searchTerm) > -1) {
n = str.search(searchTerm);
str = str.substring(0, n) + str.substring(n + searchTerm.length, str.length);
}
return str;
}

// Use it like this:
var string = "You cannot end a sentence with because because because is a conjunction";
console.log(string.deleteWord('beacause beacause beacause'));
*/
/*
<html>
<body>
<script>
   function countWords(str) {
   str = str.replace(/(^\s*)|(\s*$)/gi,"");
   str = str.replace(/[ ]{2,}/gi," ");
   str = str.replace(/\n /,"\n");
   return str.split(' ').length;
   }
document.write(countWords("   Tutorix is one of the best E-learning   platforms"));
</script>
</body>
</html>
*/



var love ="Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.";

var reg = /love/;
console.log(thong.match(reg));











