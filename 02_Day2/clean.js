var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence);

var reg3 = /[%@#;$&]/gi;
sentence2 = sentence.replace(reg3,"");
console.log(sentence2);
//ด้านบน เอาตัวอักษรที่ไม่เกี่ยวออกได้แล้ว แต่มันยังเป็นประโยคสายยาว ซึ่งใช้
//ในการนับไม่ได้

//ต่อไปคือการนับว่ามีคำไหนอยู่มากที่สุด
//ก่อนอื่นต้องแยกคำในประโยคก่อนโดยใช้คำสั่ง spilt
var sentenceSp = sentence2.split(/\s+/);
console.log(sentenceSp);

//เป็น code ที่หาว่าแต่ละคำของ sentenceSp มีจำนวนเท่าใดบ้าง
var wordcount = {};
for(i=0;i<sentenceSp.length;i++){
    var word = sentenceSp[i];
    if(!wordcount[word])
        wordcount[word] = 1;
    else
        wordcount[word]++;
}
console.log(wordcount);
//

//ด้านล่างนี้เป็น code ที่ไม่ได้บอกว่าตัวไหนมีเท่าไหร่บ้าง แต่บอกว่า ตัวไหนเยอะสุดและมีเท่าไหร่

var expCounts = {};
var maxKey = '';
for(var i = 0; i < sentenceSp.length; i++)
{
    var key = sentenceSp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);
//-----------------------------------------------------------




//เป็น code ที่เอาตัวเลขมาบวกกันได้จำนวนเต็ม โดย
// split ออกเอามาแต่ตัวเลขก่อน
var sara = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
var  saraN = sara.split(/\D/);
console.log(saraN);

//หลังจากไหนก็หาว่าตรงไหนมีเลขบ้าง ซึ่งจากการ debug พบว่าที่ split ออกมา
//ที่ไม่เป็นตัวเลข มันจะเป็น "" ทั้งหมด
var dsum = 0;
for(var i = 0; i < saraN.length; i++){
    if(saraN[i] != ""){
      dsum += parseInt(saraN[i]);
    }  
}
console.log(dsum);
//-----------------------------------------------------------------------------------------------------------------




   




       

