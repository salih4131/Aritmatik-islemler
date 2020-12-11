 //Dizi icindeki sayilarin karekokunu bulma

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];        
for (let i = 0; i < sayilar.length; i++) {                  
    let karekok = Math.sqrt(sayilar[i]);
    console.log("Dizi icindeki " + (i + 1) + ".inci sayinin karekokü  " + karekok);
}
//Dizi icindeki sayilarin karesini bulma

for (let i = 0; i < sayilar.length; i++) {                  
    let kare = Math.pow(sayilar[i], 2);
    console.log("Dizi icindeki " + (i + 1) + ".inci sayinin karesi " + kare);
}
//Dizi icindeki sayilarin toplamini bulma

let toplam = 0                                              
for (let i = 0; i < sayilar.length; i++) {
    toplam =toplam + i;
}
console.log("Dizi icindeki sayilarin toplami = " + toplam);

//Dizi icindeki sayilarin ortalamasini bulma

let ortalama = toplam / sayilar.length;                      
console.log("Dizi icindeki sayilarin  ortalamasi = " + ortalama);
               
// Dizi icindeki sayilarin mx. ve min. degerlerini bulma

let max = Math.max.apply(Math, sayilar);
let min = Math.min.apply(Math, sayilar);
   
console.log("Dizinin Max Degeri", + max);
console.log("Dizinin Min Degeri", + min);






