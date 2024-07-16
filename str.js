// // 1 )           simple string with length
var myName = "Fatima";
console.log(myName.length);
// 2)                   use lower case
console.log(myName.toLowerCase());
// 3)                    use uppercase
console.log(myName.toUpperCase());
//4)                escape sequenunce characters are as follows
var myName1 = "Fatima\n"; //newline
console.log(myName1.length);
var myName2 = "Fatima\t"; //tab
console.log(myName2.length);
var myName3 = "Fatima\r"; //carriage return
console.log(myName3.length);
// 5)                           slice
var myName4 = "Fatima"; //index start with "0"
console.log(myName4.slice(1, 4)); // "4" is not included
// 6)                          replace method
var myName5 = "Code with fatima";
console.log(myName5.replace("fatima", "aisha")); // replace word or element in the string
// 7)                           concat method:
var friend = "Ahmed"; // "+" is also used as concat
console.log(myName.concat("\tis a friend of\t", friend, "\tOK")); // add 1st string into another string one by one in sentences.
// 8)                            trim method
var friend2 = "          Fiza           "; //starting and ending spaces in fiza will get removed.
console.log(friend2.trim());
// length index
var fr = "Maheen"; //original string  cannot be change but it will return a new string
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
console.log(fr[4]);
// console.log(fr[5]) "5";                                         // it cannot possible to change a index number into string
// Quick Quizz  : use a for loop to print a string
for (var index = 0; index < fr.length; index++) {
    console.log(fr[index]);
}
