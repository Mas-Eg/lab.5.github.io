document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы после загрузки страницы
    const calculateBtn = document.getElementById('calculate-btn');
    const quantityInput = document.getElementById('quantity');
    const productSelect = document.getElementById('product');
    const resultDiv = document.getElementById('result');
    
    // Добавляем обработчик события на кнопку
    calculateBtn.addEventListener('click', calculate);
    
    function calculate() {
        // Получаем значения из формы
        const quantity = parseInt(quantityInput.value);
        const price = parseInt(productSelect.value);
        
        // Проверка валидности ввода
        if (isNaN(quantity) || quantity <= 0) {
            alert('Пожалуйста, введите корректное количество товара');
            return;
        }

        // Расчет стоимости
        const total = quantity * price;
        
        // Вывод результата
        resultDiv.innerHTML = 
            `Стоимость заказа: ${total.toLocaleString('ru-RU')} руб.`;
    }
});
