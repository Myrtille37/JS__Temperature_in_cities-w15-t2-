let cities=["Москва","Санкт-Петербург","Сочи","Калининград"];
let temperatures=[];


for(let i=0;i<cities.length;i++){
    let temperature;
    temperature=prompt('Введите температуру в городе '+ cities[i]);
    temperatures.push(parseInt(temperature));
}

const list = document.createElement("ul");
for (let i = 0; i < cities.length; i++) {
let listing = document.createElement("li");
listing.textContent = "В городе " + cities[i] + " температура: " + temperatures[i];
list.appendChild(listing);
}

document.body.appendChild(list);

let maxTemp = temperatures[0];
let minTemp = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
let nowTemp = temperatures[i];
if (nowTemp < minTemp) {
    minTemp = nowTemp;
}

if (nowTemp > maxTemp) {
    maxTemp = nowTemp;
}
}

document.write("Максимальная температура:" + maxTemp + " Минимальная температура: " + minTemp);