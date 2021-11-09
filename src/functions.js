console.log("Merhaba dünya");

let dolarBugun = 9.3;

let dolarDun = 9.2;

{
  let dolarDun = 9.1;
}

console.log(dolarDun);

const euroDun = 11.2;

//euroDun =11

console.log(euroDun);

let konutKredileri = ["Kazık Kredisi","Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];

console.log("<ul>");

for (let i = 0; i < konutKredileri.length
    ; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

console.log("</ul>");

console.log(konutKredileri);
