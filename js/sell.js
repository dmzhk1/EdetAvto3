let forma = document.getElementById('sellForm');
let soobshenie = document.getElementById('message');


if (forma) {
    forma.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        
        let imya = document.querySelector('input[name="name"]').value;
        let telefon = document.querySelector('input[name="phone"]').value;
        let marka = document.querySelector('input[name="brand"]').value;
        let model = document.querySelector('input[name="model"]').value;
        let god = document.querySelector('input[name="year"]').value;
        
        
        if (imya === "" || telefon === "" || marka === "" || model === "" || god === "") {
            soobshenie.innerHTML = '❌ Пожалуйста, заполните все поля!';
            soobshenie.style.color = '#e74c3c';
            return;
        }
        
        
        console.log("=====================================");
        console.log("📝 НОВАЯ ЗАЯВКА НА ПРОДАЖУ");
        console.log("👤 Имя: " + imya);
        console.log("📞 Телефон: " + telefon);
        console.log("🚗 Автомобиль: " + marka + " " + model);
        console.log("📅 Год: " + god);
        console.log("=====================================");
        
        
        soobshenie.innerHTML = '✅ Спасибо за заявку, ' + imya + '! Мы свяжемся с вами.';
        soobshenie.style.color = '#27ae60';
        
        
        forma.reset();
        
        
        setTimeout(function() {
            soobshenie.innerHTML = '';
        }, 5000);
    });
}


let chas = new Date().getHours();

if (chas < 12) {
    console.log("Доброе утро! 🌅");
} else if (chas < 18) {
    console.log("Добрый день! ☀️");
} else {
    console.log("Добрый вечер! 🌙");
}


let poleTelefona = document.querySelector('input[name="phone"]');

if (poleTelefona) {
    poleTelefona.addEventListener('input', function() {
        let telefon = this.value;
        if (telefon.length > 0 && telefon.length < 12) {
            console.log("Пользователь вводит телефон: " + telefon);
        }
    });
}


let poleImeni = document.querySelector('input[name="name"]');

if (poleImeni) {
    poleImeni.addEventListener('input', function() {
        let dlitelno = this.value.length;
        console.log("Длина имени: " + dlitelno + " символов");
    });
}


console.log("=====================================");
console.log("🏪 ЕдетАвто - продажа автомобилей");
console.log("📅 Сегодня: " + new Date().toLocaleDateString());
console.log("🕐 Время: " + new Date().toLocaleTimeString());
console.log("=====================================");
console.log("Скрипт страницы Продать авто загружен! 🎉");
console.log("=====================================");
