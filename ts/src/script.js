//1-vazifa
var num1 = 15;
var num3 = 42;
var num4 = num1 + num3;
console.log(num4);
//2-vazifa
var hello = "Hello, World !";
console.log(hello);
//3-vazifa
var ism = prompt("Ism kiriting");
console.log("Salom,".concat(ism, "!"));
//4-vazifa
var age = prompt("yosh kiriting");
console.log(2024 - age);
//5-vazifa
var num = prompt("1-sonni kiriting");
var num2 = prompt("2-sonni kiriting");
if (num > num2) {
    console.log(num);
}
else {
    console.log(num2);
}
//6-vazifa
var get = prompt("son kiriting");
if (get % 2 === 0) {
    console.log("Kiritilgan son juft");
}
else {
    console.log("kiritilgan son toq");
}
//7-vazifa
for (var index = 1; index <= 10; index++) {
    console.log(index);
}
//8-vazifa
var a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}
//9-vazifa
var degree = prompt("kvadrat uchun son kiriting");
console.log("".concat(degree, "ning kvadrati:").concat(degree * degree));
//10-vazifa
var reverse = prompt("Matn kiriting");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(reverse));
//11-vazifa
console.log("matn uzunligi:".concat(reverse.length));
//12-vazifa
console.log("matn bosh harfi:".concat(reverse[0]));
//13-vazifa
var arr = [45, 12, 89, 33, 67, 23, 90, 2, 5, 74];
console.log("Tartibsiz massiv:", arr);
arr.sort(function (a, b) { return a - b; });
console.log("Tartiblangan massiv:", arr);
//14-vazifa
console.log(reverseString(reverse));
//15-vazifa
var degree2 = prompt("kvadrat uchun son kiriting");
console.log("".concat(degree2, "ning kvadrati:").concat(degree2 * degree2));
//16-vazifa
var i = prompt("1-sonni kiriting");
var i2 = prompt("2-sonni kiriting");
if (i > i2) {
    console.log(i % i2);
}
else {
    console.log(i2 % i);
}
//17-vazifa
if (i > i2) {
    console.log("katta son".concat(i));
}
if (i2 > i) {
    console.log("katta son".concat(i2));
}
else {
    console.log("ikkalasi ham teng");
}
//18-vazifa
var matn = prompt("matn kiriting");
var num = matn.length / 2;
console.log(matn[num]);
//19-vazifa
var num1 = prompt("1-sonni kiriting:");
var num2 = prompt("2-sonni kiriting:");
num1 = parseInt(num1);
num2 = parseInt(num2);
if (num1 > 0 || num2 > 0) {
    console.log("qo'shish natijasi:", num1 + num2);
}
else {
    console.log("ko'paytirish natijasi:", num1 * num2);
}
//20-vazifa
var fruit1 = prompt("1-mevani kiriting:");
var fruit2 = prompt("2-mevani kiriting:");
if (fruit1[0]) {
    console.log("Bizda ".concat(fruit1, " yoki ").concat(fruit2, " bor"));
}
//21-vazifa
var birthMonth = prompt("Yoshingni kirit:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - birthMonth;
console.log("San: ".concat(birthYear, " yilda tug'ilgansan"));
//22-vazifa
var num = prompt("Ko'paytirish jadvali uchun son kirit:");
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log("".concat(num, " * ").concat(i_1, " = ").concat(num * i_1));
}
