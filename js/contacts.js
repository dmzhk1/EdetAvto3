console.log("Страница Контакты загрузилась!");


let vseKontakty = document.querySelectorAll('.contact-item');
console.log("На странице найдено контактов: " + vseKontakty.length);



let phoneElement = document.getElementById('phoneValue');

if (phoneElement) {
    phoneElement.style.cursor = 'pointer';
    
    phoneElement.addEventListener('click', function() {
        let telefon = this.innerText;
        navigator.clipboard.writeText(telefon);
        alert("Телефон скопирован: " + telefon);
        console.log("Скопирован телефон: " + telefon);
    });
}

let emailElement = document.getElementById('emailValue');

if (emailElement) {
    emailElement.style.cursor = 'pointer';
    
    emailElement.addEventListener('click', function() {
        let email = this.innerText;
        navigator.clipboard.writeText(email);
        alert("Email скопирован: " + email);
        console.log("Скопирован email: " + email);
    });
}


let telegramElement = document.getElementById('telegramValue');

if (telegramElement) {
    telegramElement.style.cursor = 'pointer';
    
    telegramElement.addEventListener('click', function() {
        let telegram = this.innerText;
        navigator.clipboard.writeText(telegram);
        alert("Telegram скопирован: " + telegram);
        console.log("Скопирован Telegram: " + telegram);
    });
}


let chas = new Date().getHours();
let privetstvie = "";

if (chas < 12) {
    privetstvie = "Доброе утро! 🌅";
} else if (chas < 18) {
    privetstvie = "Добрый день! ☀️";
} else {
    privetstvie = "Добрый вечер! 🌙";
}

console.log(privetstvie);


let denNedeli = new Date().getDay();
let working = "сегодня работаем! 🟢";

if (denNedeli === 0) {
    working = "сегодня работаем с 10:00 до 18:00 🟡";
}

console.log("Информация: " + working);



console.log("=====================================");
console.log("📞 Телефон: +7 (903) 725-33-22");
console.log("✉️ Email: info@edetauto.ru");
console.log("💬 Telegram: @dmzhk1");
console.log("📍 Адрес: Москва, Сосновая ул., 4");
console.log("=====================================");
console.log("Скрипт на странице Контакты загружен! 🎉");
console.log("=====================================");

