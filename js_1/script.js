console.log('Merhaba JS');
console.error('bu bir hata');
console.warn('bu bir uyari');
alert("bu bir alert");

const sayi1= 5;
// let 1sayi=1; HATALİ
let versionNo = 1;
// let version no = 1; HATALİ
// Sayi =! sayi1; HATALİ
// let for =1; HATALİ

const isim = 'clarusway';
console.log("isim degiskeninin degeri: ", isim);
console.log("isim degiskeninin tipi: ", typeof isim);

const pi =3.14;
console.log("pi degiskeninin degeri: ", pi);
console.log("pi degiskeninin tipi: ", typeof pi);

const dogruMu= true;
console.log("dogruMu degiskeninin degeri: ", dogruMu);
console.log("dogruMu degiskeninin tipi: ", typeof dogruMu);

const bos =null;
console.log("bos degiskeninin degeri: ", bos);
console.log("bos degiskeninin tipi: ", typeof bos);

// const isim = "notClarusway"; ikinci tanimlamayi kabul etmiyor.

 //const ad; //const da baslangic degeri atanmazsa error verir.

 let dil = 'Java';
 dil ="JavaScript";
 console.log("dil degiskeninin degeri: ", dil);
 console.log("dil degiskeninin tipi: ", typeof dil);

 dil =1;
 console.log("dil degiskeninin degeri: ", dil);
 console.log("dil degiskeninin tipi: ", typeof dil);

 dil =true;
 console.log("dil degiskeninin degeri: ", dil);
 console.log("dil degiskeninin tipi: ", typeof dil);

 let sayac;
 console.log("sayac degiskeninin degeri: ", sayac);
 console.log("sayac degiskeninin tipi: ", typeof sayac);

 sayac = true;
 console.log("sayac degiskeninin degeri: ", sayac);

 kalanBorc= 15.5;
 // let kalanBorc= 10;
 console.log("kalanBorc degiskeninin degeri: ", kalanBorc);
 console.log("kalanBorc degiskeninin tipi: ", typeof kalanBorc);

//  let sayac= 2; block scoped tanimlamayi kabul etmiyor.

//var global scoped tanimlamayi kabul ediyor.

var fiyat;
fiyat =23;
console.log("fiyat degiskeninin degeri: ", fiyat);

fiyat= 15.55;
console.log("fiyat degiskeninin degeri: ", fiyat);

var fiyat= 45;
console.log("fiyat degiskeninin degeri: ", fiyat);


//Aritmetik Operatorler

const ekmek = 2;
const yumurta =30;
const peynir =40;
const toplamHarcama= ekmek + yumurta + peynir;
console.log("toplam harcama: ", toplamHarcama + "Lira");
console.log(`HARCAMA:${toplamHarcama}`, "TL");

const firstName ="Zeynep";
const surname="Aytop";
const fullname= firstName + " " + surname;
console.log("fullname: ", fullname);


const x= 2;
const y= "2";
const result= x + y;
console.log("result: ", result);
console.log("result: ", typeof result);

const yil =2024;
const dogumTarihi= 1985;
const yas = yil - dogumTarihi;
console.log("yas: ", yas);
console.log("yas: ", typeof yas);

const q =2;
const k ="2";
const result2 = k-q;
const result3 =q-k;
console.log("result2: ", result2);
console.log("result2: ", typeof result2);
console.log("result3: ", result3);
console.log("result3: ", typeof result3);

console.log("final result: " + q - k); //NaN

// const pi= 3.14; yukarıda tanımlı.
const r = 3;
const alan =pi * r**2;
const cevre =2*pi*r;
console.log("alan: ", alan);
console.log("cevre: ", cevre);

let a =3;
console.log("a", a);
let b=++a;
console.log("a", a);
let c = --a;
console.log(a,b,c);

//const z = 3;
//let klm =z++;
//console.log("klm: ", klm); Uncaught TypeError: Assignment to constant variable.

a =5;
console.log("a", a);
b = ++a;
console.log("b", b);

c = a++;
console.log("c", c);
console.log("a", a);

let sayi = 123;
console.log("sayi: ", sayi%2);

const s1=5;
console.log(s1==5);
console.log(s1=="5");
console.log(s1==="5");

console.log(s1!="5");
console.log(s1 !=="5");

let s2 = true;
let s3 = true;
console.log(s2 && true);
console.log(s2 && s3);
console.log(s2 && s3 && false);

s3: false;
console.log(s2 || s3 || false);

s3 = null;
console.log(s2 && s3);
console.log(s2 || s3);

// 0, false, null, undefined, "", NaN disindaki butun durumlar true kabul edilir.

s2="kus";
s3= "kedi";
console.log(s2||s3);
console.log(s2&&s3);

s2= true;
s3= false;
console.log(!s2);
console.log(!s3);
s3=null;
console.log(!s3);

s2= "zeynep";
console.log(!s2);

s2= 55;
console.log(!s2);