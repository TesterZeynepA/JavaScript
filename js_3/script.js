//while dongusu

let not;
do{
    not= prompt("0-100 arasında bir not giriniz: ");

}while(not < 0 || not > 100);
{
console.log("Girdiğiniz sayi: ", not);
}

function yasYazdir(){
    console.log(`Benim adim Mehmet ve Ben ${2021-1979} yasindayim`);
}
yasYazdir();

let dogumYili= prompt("Dogum yilinizi giriniz: ");

function yasHesapla(a){
    return 2024-a;
}

const yas = yasHesapla(dogumYili);

console.log("Yasiniz: ",yas);

function hesapMakinesi(girdi1, girdi2, islem){
    if(islem === "+"){
        return girdi1 + girdi2;
    }else if(islem === "-"){
        return girdi1 - girdi2;
    }else if(islem === "*"){
        return girdi1 * girdi2;
    }else if(islem === "/"){
        return girdi1 / girdi2;
    }
}
const sonuc = hesapMakinesi(10, 5, "+");
console.log("Sonuc: ", sonuc);

function tekCift(sayi1){
    if(sayi1 % 2 === 0){
        return "cift";
    }else{
        return "tek";
    }
}
const sonuc2 = tekCift(23);
console.log("Sonuc2: ", sonuc2);

//function expression
const tekMi = function(x){
    return x % 2 ? "tek" : "cift";
};
console.log("Tek mi: ", tekMi(9));


//arrow function
const topla = (a,b) => {
    return a+b;
};

console.log("Topla: ", topla(2,3));

alert("Merhaba");

const selamVer= ()=>{alert("SELAM!");
console.log("Selam");
};
selamVer();

//homework-1
let yariCap= prompt("Yaricap giriniz: ");
const pi= 3.14;

const alanHesabi= (yariCap)=>{
    console.log(pi*yariCap**2);
};
alanHesabi(yariCap);

const meyveDilimle = (meyveAdeti)=> meyveAdeti * 4;
const meyveSuyuHazirla = function (armut, elma, muz) {
    const armutDilimi= meyveDilimle(armut);
    const elmaDilimi= meyveDilimle(elma);
    const muzDilimi= meyveDilimle(muz);
    const meyveSuyu = `Meyve Suyu ${armutDilimi} dilim armut, ${elmaDilimi} dilim elma ve ${muzDilimi} dilim muz'dan oluşmaktadır`;
    return meyveSuyu;
};

//Error çünkü scope dışında tanımlanmış
//console.log(armutDilimi);

console.log(meyveSuyuHazirla(2,3,6));

//Block Scope Tanimlamasi
{
    const sayi =3;
}

let sayi3 = 5;
const yeniSayi= function() {
    sayi3= 10;
    console.log("sayi3 fonksiyon icerisinde soyle: ", sayi3);
};
yeniSayi();// bu function yoruma alınırsa aşağıdaki sonuç 6 olur.

console.log("sayi3 fonksiyon dısında soyle: ", ++sayi3);

let sayi4= 3;
const yeniSayi2 = function() {
    let sayi4 = 7;
    console.log("sayi4 fonksiyon içinde şu şekilde: ", sayi4);
};
yeniSayi2();
console.log("sayi4 fonksiyon dışında şöyle: ", sayi4);

const fonk = function(sayi4) {
    let negatif;
    if(sayi4<0){
        negatif = "true";
    }else {
        negatif= "false";
    }
    console.log(negatif);
};
fonk(3);

//homework-2
let taban= prompt("taban degerini giriniz: ");
let yukseklik= prompt("yükseklik degerini giriniz: ");
const ucgenAlani=  (taban, yukseklik)=>{
    console.log((taban*yukseklik)/2);
};
ucgenAlani(taban, yukseklik);

//homework-3

let rakam = prompt("Sayıyı giriniz: ");
let usSayisi = prompt("Ussu giriniz: ");
const kareAl=  (rakam)=>{
    console.log(rakam**2);
};const kupAl=  (rakam)=>{
    console.log(rakam**3);
};const usAl=  (rakam, usSayisi)=>{
    console.log(Math.pow(rakam, usSayisi));
};

kareAl(rakam);
kupAl(rakam);
usAl(rakam, usSayisi);

//homework-4
let yil = (prompt("Yıl giriniz:"));

const artikYilMi = function(yil) {
    return (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
};

if (artikYilMi(yil)) {
    console.log(yil + " artık yıldır.");
} else {
    console.log(yil + " artık yıl değildir.");
}

//Diziler
//1. yöntem

const arabalar = ["Mercedes", "Ferrari", "Bmw", "Volvo"];

//2. yöntem

const gunler = new Array (
    "Pazartesi",
    "Salı",
    "Cärramba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
);

console.log("Arabalar : ", arabalar);
console.log("ilk araba : ", arabalar[0]);
console.log("Son araba : ", arabalar[arabalar.length-1]);

arabalar[0]= "Renault";
console.log("yeni arabalar: ", arabalar);

//Error
//arabalar = ["Opel", "Mazda", "Nissan"];
//console.log("arabalar: ", arabalar);

const newDizi = ["ABC", 12, true, NaN, arabalar];
console.log("newDizi: ", newDizi);

const meyveler = ["Elma", "Armut", "Muz", "Kivi", "Cilek"];

const konsol = () => console.log(meyveler);


console.log(meyveler.pop());
konsol();

console.log(meyveler.push("Karpuz"));
konsol();

console.log(meyveler.shift());
konsol();

console.log(meyveler.unshift("Cilek"));
konsol();

console.log(meyveler.reverse());
konsol();
