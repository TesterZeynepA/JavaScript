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
