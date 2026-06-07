console.log("Сайт ЕдетАвто загрузился!");

//СЧИТАЕМ КОЛИЧЕСТВО МАШИН
let vseKartochki = document.querySelectorAll('.card');
console.log("Всего машин на странице: " + vseKartochki.length);

//ПРИВЕТСТВИЕ ПО ВРЕМЕНИ ДНЯ
let chas = new Date().getHours();
if (chas < 12) {
    console.log("Доброе утро! 🌅");
} else if (chas < 18) {
    console.log("Добрый день! ☀️");
} else {
    console.log("Добрый вечер! 🌙");
}

//СЧЁТЧИК КЛИКОВ ПО КАРТОЧКАМ
let schetchikKlikov = 0;

for (let i = 0; i < vseKartochki.length; i++) {
    let kartochka = vseKartochki[i];
    
    kartochka.addEventListener('click', function() {
        schetchikKlikov = schetchikKlikov + 1;
        console.log("Кликнули по карточке! Всего кликов: " + schetchikKlikov);
    });
}