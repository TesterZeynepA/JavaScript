const para = "1000";
console.log(para+15);
console.log(Number(para) + 15);

const dil = "Javascript";
console.log(Number(dil) + 15);

const sayi = 54;
console.log(String(sayi) + " bu bir string");
console.log(typeof sayi);
console.log(typeof String(sayi));

const s1 =5;
const s2 = -7;
const isim = "John";

console.log(Boolean(s1));
console.log(Boolean(s2));
console.log(Boolean(isim));

const sifir= 0;
console.log("Sifirin boolean degeri : ", Boolean(sifir));
const nal = null;
console.log("nal boolean degeri : ", Boolean(nal));
const tanimsiz = undefined;
console.log("tanimsiz boolean degeri : ", Boolean(tanimsiz));
const bosluk = "";
console.log("bosluk boolean degeri : ", Boolean(bosluk));
const sayiDegil = NaN;
console.log("sayiDegil boolean degeri : ", Boolean(sayiDegil));

const yas = 18;

if(yas<18){
    console.log("cocuk");
}else{
    console.log("yetiskin");
}

let sonuc;

if(yas<=3){
   sonuc = "bebek";
}else if(yas<=14){
    sonuc = "ergen";
}else if(yas<18){
    sonuc = "genc";
}else{
    sonuc = "yetiskin";
}
console.log("sonuc su sekilde : ", sonuc);

// //homeworks
// //homework-1
// let sayi1 = prompt("Please enter a sayi1");
// if (sayi1<0) {
//     console.log("sayi1 is negative");
// }else if (sayi1>0) {
//     console.log("sayi1 is positive");
// }else{
//     console.log("sayi1 is zero");
// }

// const bireyYas = 21;
// const cinsiyet = "erkek";
// const saglikli = true;

// const kosul = bireyYas >= 18 && cinsiyet === "erkek" && saglikli;

// if(kosul) {
//     console.log("Askere gidebilir");
// }else {
//     console.log("Askere gidemez");
// }
// //homework-2

// let rakam1 = prompt("Please enter a rakam 1");
// let rakam2 = prompt("Please enter a rakam 2");
// let rakam3 = prompt("Please enter a rakam 3");

// let enBuyuk= rakam1;

// if (rakam2>enBuyuk) {
//     enBuyuk = rakam2;
// }
// if (rakam3>enBuyuk && rakam3>rakam2) {
//     enBuyuk = rakam3;
// }
// console.log("enBuyuk : ", enBuyuk);



// let gun = prompt("1 ile 7 arasinda bir sayi giriniz"); // gun degiskeni string, cunku propmt her zaman string degeri veriyor.

// switch (Number(gun)) {
//   case 1:
//     gun = "pazartesi";
//     break;
//   case 2:
//     gun = "sali";
//     break;
//   case 3:
//     gun = "carsamba";
//     break;
//   case 4:
//     gun = "persembe";
//     break;
//   case 5:
//     gun = "cuma";
//     break;
//   case 6:
//     gun = "cumartesi";
//     break;
//   case 7:
//     gun = "pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }

// // console.log(typeof Number(gun))


// if(isNaN(gun)){
//   const uyari = "lütfen 1 ile 7 arasında bir sayı giriniz";
//   console.log("uyari: ", uyari);
// }else if (0 < Number(gun) < 8) {
//   console.log("gun: ", gun);
// }else {
//   const uyari = "Gün 1-7 arasında olmalıdır";
//   console.log("uyari: ", uyari);
// }

// const hiz = 90;
// const mesaj= hiz >=120 ? "Hızlı" : "Yavaş";
// console.log("mesaj: ", mesaj);

// //DONGULER
// for(let i=1; i<=10; i++){
//     console.log("Hello World");
// }

// for(let i=20; i>=15; i--){
//    if(i%2===0){
//        console.log("i : ", i);
//    }
// }

// let toplam = 0;
// for(let t =1; t<=10; t++){
//     toplam += t;
// }
// console.log("toplam: ", toplam);

// const n = prompt("Pozitif bir sayi giriniz: ");
// let toplam2=0;
// for(let i =1; i<=n; i++){
//     toplam2 += i;
// }
// console.log("toplam2: ", toplam2);

// const sayi2 = prompt("Pozitif bir sayı giriniz: ");
// const asalMi = (sayi2) =>{
//   let asal =true;
//   for(let i=2; i<sayi2; i++){
//     if(sayi2 % i == 0){
//       asal = false;
//       break;
//     }
//   }
//   return asal ? "ASAL" : "ASAL DEGİL!";
// };
// console.log(` Bu ${sayi2} asal mi ? : ${asalMi(sayi2)}`);

// let i =1;
// while (i<=10) {
//   console.log(i+ "Hello World");
//   i++;
// }

// //homework-3
// let birinciSayi = prompt("Please enter a first number");
// let ikinciSayi = prompt("Please enter a second number");

// let islem = prompt("Please enter a operation (+,-,*,/) : ");

// if(islem=="+"){
//     console.log("toplam : ", Number(birinciSayi)+Number(ikinciSayi));
// }else if (islem=="-") {
//     console.log("fark : ", Number(birinciSayi)-Number(ikinciSayi));
// }else if (islem=="*") {
//     console.log("carpim : ", Number(birinciSayi)*Number(ikinciSayi));
// }else if (islem=="/") {
//     console.log("bolme : ", Number(birinciSayi)/Number(ikinciSayi));
// }else {
//     console.log("Hatalı islem");
// }

// //homework-4
// let haftaGunu = prompt("Gün adını giriniz");
// let program;

// switch (haftaGunu) {
//   case "pazartesi":
//     program="InClass";
//     break;
//   case "sali":
//     program="InClass";
//     break;
//   case "carsamba":
//     program="InClass";
//     break;
//   case "persembe":
//     program="InClass";
//     break;
//   case "cuma":
//     program="Teamwork";
//     break;
//   case "cumartesi":
//     program="InClass + Workshop";
//     break;
//   case "pazar":
//     program="Self-Study";
//     break;
//   default:
//     console.log("Geçersiz gün adı girdiniz. Lütfen tekrar deneyiniz!")
//     break;
// }

// console.log(program);

// //homework-5
// let not = prompt("0 ve 100 arasında geçerli bir ders notu giriniz: ");
// const gecmeDurumu= not >=50 ? "Geçti" : "Kaldı";
// console.log("gecmeDurumu: ", gecmeDurumu);

// //homework-6
// let dersNotu= prompt("Bir ders notu giriniz: ");

// if (dersNotu > 100 || dersNotu < 0) {
//   console.log("Hatalı not girdiniz");
// } else if (dersNotu < 40) {
//   console.log("Kaldı");
// } else if (40 <= dersNotu && dersNotu < 50) {
//   console.log("Şartlı Geçti");
// } else if (50 <= dersNotu && dersNotu <= 100) {
//   console.log("Geçti");
// } else {
//   console.log("Lütfen bir sayı giriniz!");
// }

//homework-7
// let maas = prompt("Lütfen maaşınızı giriniz: ");

// const asgariUcret= 17000;

// let zam = maas < 17000 ? maas * 1.5 : maas * 1.1;

// console.log("Zamlı maas miktari: ", zam);

//homework-8

let gelir = prompt("Lütfen gelirinizi giriniz: ");
let gider = prompt("Lütfen giderinizi giriniz: ");
const asgari =17000;

let kredi = (gelir - gider)>=asgari ? "Kredi verilebilir" : "Kredi verilemez";
console.log("Kredi alma durumu: ",kredi);
