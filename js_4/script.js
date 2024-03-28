const meyveler = ["Elma", "Armut", "Muz", "Kivi"];
const konsol =()=> console.log(meyveler);

console.log(meyveler.sort());
konsol();

console.log(meyveler.splice(1,0, 'Kiraz'));
konsol();

console.log(meyveler.splice(2,1, 'Kayısı'));
konsol();

const sayilar = [1,2,"3", "dort"];

const konsol2 =()=> console.log(sayilar);
console.log(sayilar.includes(1));
console.log(sayilar.includes(3));
konsol2();

const elementler = ["Ates", "Su", "Toprak", "Tahta"];

console.log(elementler.join());
console.log(elementler.join(""));
console.log(elementler.join("-"));
console.log(elementler);

const hayvanlar = ["Kedi", "Kopek", "Kus", "Balik"];
console.log(hayvanlar.slice(2));
console.log(hayvanlar.slice(1,3));

console.log(sayilar.toString());

console.log(hayvanlar.indexOf("Kopek"));

const yeniDizi = hayvanlar.concat(elementler);
console.log(yeniDizi);

const rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let toplam =0;
for (let i=0; i < rakamlar.length; i++){
    toplam += rakamlar[i];
}
console.log(toplam);

const rakamlarDizisi=[-42, 13, -25, 57, 15, -4];

const topla=(dizi) => {
    let negatifToplam=0;
    let pozitifToplam=0;

    for(let i=0; i< dizi.length; i++){
        if(dizi[i] < 0){
            negatifToplam += dizi[i];
        }else{
            pozitifToplam += dizi[i];
        }
    }
    if(negatifToplam){
          console.log(`Dizideki negatif sayilarin toplami: ${negatifToplam}`); 
    }
    if(pozitifToplam){
 
    console.log(`Dizideki pozitif sayilarin toplami: ${pozitifToplam}`);
    }
}

topla(rakamlarDizisi);
topla(rakamlar);


const toplamYeni= (dizi) => {
    let sonuc =0;
    for(let i in dizi) {
        sonuc += dizi[i];
    }
    console.log(sonuc);
}

toplamYeni(rakamlarDizisi);
toplamYeni(rakamlar);

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar= ["Öztürk", "Yılmaz", "Kara", "Kaya", "Demir"];

const birlestir=(x,y)=> {
    let adSoyad= [];
    for(let i in x){
        adSoyad[i] = `${x[i]} ${y[i]}`;
    }
    console.log(adSoyad);
}
birlestir(adlar, soyAdlar);

const arabalar = ["BMW", "Mercedes", "Fiat", "Audi", "Volvo"];
const stringEkleme= (x) => {
    let yazi = "";
    for(let arac of x) {
        yazi+= arac + " ";
    }
    return yazi;
};
const arabalarString= stringEkleme(arabalar);

console.log(arabalarString);
console.log(typeof arabalarString);

const ogrenciler = ["John", "Ali", "Ayşe", "Fatma"];

//const konsolla = (x) => {
  //  console.log(x);
//};

//ogrenciler.forEach(konsolla);

ogrenciler.forEach((x)=> console.log(x));

const dizi3 = [213, 22, 56, 12, 834];

// let toplama3= 0;
// const toplamaFonksiyonu = (x) => {
//     toplama3 += x;
//     document.querySelector(".toplam").innerHTML = toplama3;
// }
// dizi3.forEach(toplamaFonksiyonu);


let x =0;

dizi3.forEach((y) => (x += y));

document.querySelector(".toplam").innerHTML = x;

const dizi4 = [-21, 22, -56, 12, -84];
const yeniDizi2 = [];

function carp(deger, indis, dizi4) {
    yeniDizi2[indis]= deger *5;
}
dizi4.forEach(carp);
console.log(yeniDizi2);

const yeniRakamlar = [1, 2, 5, 6, 8, 10];

const carpilmisRakamlar = yeniRakamlar.map((x)=> x*5);

console.log(carpilmisRakamlar);

const isimlerYeni = ["Ali", "Veli", "Ayse", "Fatma"];

const isimlerBuyuk = isimlerYeni.map((x) => x.toUpperCase());

console.log(isimlerBuyuk);

const euro = 34.87;
const dolar = 32.33;

const tlFiyatlar = [100, 150, 100, 50, 80];

const euroTL= tlFiyatlar.map((x) => x * euro);
const dolarTL= tlFiyatlar.map((x) => x * dolar);

console.log(euroTL);
console.log(dolarTL);

const koordinatlar = [-100, 150, -32, 43, -20];

const negatifKoordinatlar = koordinatlar.filter((x) => x < 0);
console.log(negatifKoordinatlar);

koordinatlar.filter((x) => x < 0)
.map((t) => t * -1)
.forEach((y) => console.log(y));

//homework
const bireyler = ["alice", "Bob", "Tiff", "Bruce", "Ahmet", "Mehmet", "Veli"];

const istenenHarf = "a";

const istenenHarfleBaslayanlar = bireyler
  .filter((x) => x.toLowerCase()
  .startsWith(istenenHarf.toLowerCase()));

console.log(istenenHarfleBaslayanlar);


const maaşlar = [3000, 2891, 3500, 4200, 7000, 2500];

let toplamZamliMiktar=0;
const azMaaşlar = maaşlar
.filter((x) => x < 3000)
.map((y) => y * 1.1)
.forEach((z) => toplamZamliMiktar +=z);

console.log(toplamZamliMiktar);