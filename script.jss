/*
    Adı: Faktöriyel alma programı
    Yazan: Efe Özisik
    Tarih: 16.08.2021
*/

//object örneği olsun diye yapıyorum

//öncelikle boş bir obje oluşturuyoruz
let person = {}
//kullanıcının bilgilerini alıyoruz
person.name = prompt("Lütfen adınızı girin");
person.surname = prompt("Lütfen soyadınızı girin");
//kullanıcıya faktöriyel alma yeteneği kazandırıyoruz.
person.faktoriyelAl = function (sayi) {
    //başlangıç değeri olarak 1 atıyoruz.
    let faktoriyel = 1;
    //girilen sayı 0 ise faktöriyelini 1 olarak döndürüyoruz
    if (sayi === 0) {
        return faktoriyel;
    }
    //girilen sayı 0'dan büyükse faktöriyeli hesaplıyoruz
    for (let i = sayi; i > 0; i--){
        faktoriyel *= i
    }
    return faktoriyel
}

//kullanıcıdan sayı alıyoruz
let sayi=Number(prompt(`Merhaba ${person.name.toUpperCase()} ${person.surname.toUpperCase()}. Faktöriyeli alınacak sayıyı girin`));

//kulanıcı sayı girene kadar tekrar ediyoruz.
while (isNaN(sayi)) {
    sayi = Number(prompt("Lütfen sayı girin!"))
}

//sayının pozitif olup olmadığını kontrol ediyoruz.
if (sayi < 0) {
    alert("Negatif sayıların faktoriyeli alınamaz.")
} else {

    //kullanıcı sayı girdikten sonra fonksiyonu çağırarak faktöriyeli hesaplıyoruz
    const sonuc = person.faktoriyelAl(sayi);
    //hesapladığımız değeri alert ediyoruz
    alert(`${sayi} sayısının faktoriyeli=${sonuc}`);
}

////////////////////////////////
//dersteki örnek 9-13
//////////////////////////////

let sayi1 = Number(prompt("Lütfen bir sayı girin"))


alert("Girdiğiniz sayının faktoriyeli = " + faktoriyelAl(sayi1))


function faktoriyelAl(sayi) {
    let sonuc = 1
    for (let sayac = sayi; sayac > 0; sayac--){
        sonuc=sonuc * sayac
    }
    return sonuc
}

////////////////////////////////////////
// dersteki örnek 13-16
////////////////////////////////////////7


//değişkenler (variable)

//Veri Tipleri data types
//string -> metinsel ifadeler
//number -> 10,-10 (integer),3.7 (float)
//boolean -> true,false

//bilgi verme console.log(),alert(),
//kullanıcıdan bilgi alma prompt()->bilgiyi string alır

//temel matematiksel işlem operatörleri
// +,-,/,*,%,** 

//karşılaştırma operatörleri
//<,>,<=,>=, ==, !=
//js için-> === Tip ve  değer karşılaştırması yapar

//conditions if statements
/*let not1 = Number(prompt("1. notu girin"))
let not2 = Number(prompt("2. notu girin"))
if (ortalamaBul(not1,not2) < 50) {
    alert("üzgünüm dersten kaldınız. \nortalamanız="+ ortalamaBul(not1,not2))
}
if (ortalamaBul(not1,not2) >= 50 && ortalamaBul(not1,not2)<= 60) {
    alert("geçtiniz ama biraz daha gayret ortalamanız="+ ortalamaBul(not1,not2))
}
if (ortalamaBul(not1,not2) > 60) {
    alert("tebrikler notunuz güzel ortalamanız="+ ortalamaBul(not1,not2))
}
function ortalamaBul(not1, not2) {
    let ortalama = (not1 + not2) / 2
    return ortalama
}*/

//döngüler (loops)
//for,while,do while

/*let sayi = Number(prompt("Sayi giriniz"))
let sonuc = 0
/*for (let sayac = 0; sayac <= sayi; sayac++){
    sonuc=sonuc + sayac
}*/

/*let sayac=0
while (true) {
    sonuc = sonuc + sayac
    if (sayac === sayi) {
        break
    }
    sayac++
}
alert(sonuc)*/



let sayi = Number(prompt("Sayı girin"))

alert(faktoriyelBul(sayi))

function faktoriyelBul(sayi) {
    if (isNaN(sayi)) {
        return "Sayı girmediniz"
    }
    let sonuc = 1
    if (sayi === 0) {
        return 1
    }
    if (sayi < 0) {
        return "negatif sayıların faktöriyeli yoktur"
    }
    for (let sayac = sayi; sayac > 0; sayac--){
        sonuc = sonuc * sayac
    }
    return sonuc
}
    bitti
    
