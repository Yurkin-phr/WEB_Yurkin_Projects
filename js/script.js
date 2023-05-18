document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки на элементы формы и модального окна
    const orderForm = document.getElementById("order-form");
    const orderPreviewModal = document.getElementById("order-preview-modal");
    const orderPreview = document.getElementById("order-preview");
    const confirmButton = document.getElementById("confirm-button");
    const closeButton = document.getElementsByClassName("close")[0];
    
    // Обработчик события отправки формы
    orderForm.addEventListener("submit", function (Event) {
    Event.preventDefault(); // Предотвращаем отправку формы
    displayOrderPreview(); // Отображаем предварительный просмотр задачи
    });
    
    // Обработчик события нажатия кнопки "Подтвердить"
    confirmButton.addEventListener("click", function () {
    displayOrderData(); // Выводим данные назначения
    closeOrderPreviewModal(); // Закрываем модальное окно предварительного просмотра
    });
    
    // Обработчик события нажатия кнопки "Закрыть"
    closeButton.addEventListener("click", function () {
    closeOrderPreviewModal(); // Закрываем модальное окно предварительного просмотра
    });
    
    // Функция для отображения предварительного просмотра заказа
    function displayOrderPreview() {
    // Получаем значения полей формы
    const manager = document.getElementById("manager-select").value;
    const lastName = document.getElementById("last-name-input").value;
    const firstName = document.getElementById("first-name-input").value;
    const patronymic = document.getElementById("patronymic-input").value;
    const urgency = document.getElementById("urgency-select").value;
    const deadline = document.getElementById("deadline-input").value;
    const description = document.getElementById("description-textarea").value;
    const approval = document.getElementById("approval-select").value;
    
    // Формируем текст предварительного просмотра заказа
    const orderPreviewText = `
    Менеджер: ${manager}
    Фамилия: ${lastName}
    Имя: ${firstName}
    Отчество: ${patronymic}
    Уровень сложности: ${urgency}
    Дедлайн: ${deadline}
    Описание проекта: ${description}
    Тестировщик: ${approval}
    `;
    
    // Вставляем текст предварительного просмотра в модальное окно
    orderPreview.textContent = orderPreviewText;
    openOrderPreviewModal(); // Открываем модальное окно предварительного просмотра
    }
    
    // Функция для открытия модального окна предварительного просмотра
    function openOrderPreviewModal() {
    orderPreviewModal.style.display = "block";
    }
    
    // Функция для закрытия модального окна предварительного просмотра
    function closeOrderPreviewModal() {
    orderPreviewModal.style.display = "none";
    }
    
    // Функция для вывода данных заказа в консоль
    function displayOrderData() {
    const manager = document.getElementById("manager-select").value;
    const lastName = document.getElementById("last-name-input").value;
    const firstName = document.getElementById("first-name-input").value;
    const patronymic = document.getElementById("patronymic-input").value;
    const urgency = document.getElementById("urgency-select").value;
    const deadline = document.getElementById("deadline-input").value;
    const description = document.getElementById("description-textarea").value;
    const approval = document.getElementById("approval-select").value;
    
    console.log("Данные проекта:");
    console.log("Менеджер:", manager);
    console.log("Фамилия:", lastName);
    console.log("Имя:", firstName);
    console.log("Отчество:", patronymic);
    console.log("Уровень сложности:", urgency);
    console.log("Дедлайн:", deadline);
    console.log("Описание проекта:", description);
    console.log("Тестировщик:", approval);
    }
    });
