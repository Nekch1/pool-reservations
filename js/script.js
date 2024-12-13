    window.onload = function() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }, index * 300); 
    });
};

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('form-message').textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
    document.getElementById('form-message').style.display = 'block';
    this.reset();
});

// Открыть форму бронирования
function openBookingForm() {
    document.getElementById("booking-form").style.display = "flex";
}

// Закрыть форму бронирования
function closeBookingForm() {
    document.getElementById("booking-form").style.display = "none";
}

// Подтвердить бронирование
function submitBooking(event) {
    event.preventDefault(); // Останавливаем отправку формы
    
    // Здесь можно добавить обработку формы или отправку на сервер
    closeBookingForm(); // Закрыть форму бронирования
    openConfirmationMessage(); // Показать сообщение о подтверждении
}

// Открыть сообщение о подтверждении бронирования
function openConfirmationMessage() {
    document.getElementById("confirmation-message").style.display = "block";
}

// Закрыть сообщение о подтверждении бронирования
function closeConfirmationMessage() {
    document.getElementById("confirmation-message").style.display = "none";
}

function applyFilters() {
    const maxPrice = document.getElementById("maxPrice").value;
    const poolCards = document.querySelectorAll(".pool-card");

    poolCards.forEach(card => {
        const poolInfo = card.querySelector(".pool-info");
        const poolPriceText = poolInfo.querySelector("p:nth-of-type(2)").innerText;
        const poolPrice = parseInt(poolPriceText.replace(/[^\d]/g, ''));

        const matchesPrice = poolPrice <= parseInt(maxPrice);

        if (matchesPrice) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
