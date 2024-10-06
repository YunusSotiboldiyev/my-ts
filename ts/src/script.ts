//1-vazifa
let num1: number = 15;
let num3: number = 42;
let num4: number = num1 + num3;
console.log(num4);
//2-vazifa
let hello :string = "Hello, World !";
console.log(hello);
//3-vazifa
let ism: string = prompt("Ism kiriting");
console.log(`Salom,${ism}!`);
//4-vazifa
let age:number = prompt("yosh kiriting");
console.log(2024-age);
//5-vazifa
let num:string = prompt("1-sonni kiriting");
let num2:string = prompt("2-sonni kiriting");
if (num>num2) {
     console.log(num);
}else{
     console.log(num2);
}
//6-vazifa
let get:number = prompt("son kiriting");

if (get%2===0) {
     console.log("Kiritilgan son juft");
}else{
     console.log("kiritilgan son toq");
}
//7-vazifa
for (let index = 1; index <= 10; index++) {
     console.log(index);
}
//8-vazifa
let a:number = 0;
while (a<=10) {
     console.log(a);
     a++;
}
//9-vazifa
let degree:number = prompt("kvadrat uchun son kiriting");
console.log(`${degree}ning kvadrati:${degree*degree}`);
//10-vazifa
let reverse:string = prompt("Matn kiriting");
function reverseString(str) {
     return str.split("").reverse().join("");
 }
console.log( reverseString(reverse));
//11-vazifa
console.log(`matn uzunligi:${reverse.length}`);
//12-vazifa
console.log(`matn bosh harfi:${reverse[0]}`);
//13-vazifa
let arr: number[] = [45, 12, 89, 33, 67, 23, 90, 2, 5, 74];
console.log("Tartibsiz massiv:", arr);
arr.sort((a, b) => a - b);
console.log("Tartiblangan massiv:", arr);
//14-vazifa
console.log( reverseString(reverse));
//15-vazifa
let degree2:number = prompt("kvadrat uchun son kiriting");
console.log(`${degree2}ning kvadrati:${degree2*degree2}`);
//16-vazifa
let i:number = prompt("1-sonni kiriting");
let i2:number = prompt("2-sonni kiriting");
if(i>i2){
     console.log(i%i2);
}else{
     console.log(i2%i);
}
//17-vazifa
if(i>i2){
     console.log(`katta son${i}`);
}if(i2>i){
     console.log(`katta son${i2}`);
}else{
     console.log("ikkalasi ham teng");
}
//18-vazifa
let matn:string = prompt("matn kiriting");
let num = matn.length/2;
console.log(matn[num]);
//19-vazifa
let num1 = prompt("1-sonni kiriting:");
let num2 = prompt("2-sonni kiriting:");

num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 > 0 || num2 > 0) {
    console.log("qo'shish natijasi:", num1 + num2);
} else {
    console.log("ko'paytirish natijasi:", num1 * num2);
}
//20-vazifa
let fruit1 = prompt("1-mevani kiriting:");
let fruit2 = prompt("2-mevani kiriting:");

if (fruit1[0]) {
    console.log(`Bizda ${fruit1} yoki ${fruit2} bor`);
}
//21-vazifa
let birthMonth = prompt("Yoshingni kirit:");
let currentYear = new Date().getFullYear();

let birthYear = currentYear - birthMonth;  

console.log(`San: ${birthYear} yilda tug'ilgansan`);
//22-vazifa
let num = prompt("Ko'paytirish jadvali uchun son kirit:");


for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}