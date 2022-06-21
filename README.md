# currency-converter-task
Do a currency converter app task

Описание задачи
Создать интерфейс приложения конвертера валют с загрузкой актуальных данных по API, возможностью просмотра истории курсов валют и простой настройкой интерфейса.


Требования к интерфейсу
Интерфейс доступен как на мобильных, так и на десктопных устройствах
Главный экран состоит из секций
Пользователь может показывать/скрывать определенные секции (с помощью кнопок, <select>'ов, модальных окон и т.д., на выбор исполнителя)


Cписок секций
Конвертация валют
Два числовых поля для управления суммами
Выбор валют происходит из выпадающих списков
Есть возможность поменять конвертируемые валюты местами одной кнопкой
Результат конвертации отображается с точностью до сотых
Вместе с результатом необходимо отображать стоимость одной единицы
Секция всегда доступна, нельзя управлять ее отображением
Список стоимостей
Два списка с результатом конвертации сумм из основной валюты в конвертируемую и наоборот (USD -> EUR, EUR -> USD)
Список единиц конвертации: 1, 5, 10, 25, 50, 100, 500, 1000, 5000
Есть возможность управлять отображением секции
Список истории курса конвертации
Данные по коэффициенту конвертации за последние 10 дней
Отображение в виде графика, но можно и списком
Есть возможность управлять отображением секции


Требования к технологиям
Основной фреймворк - React
Обязательно использование TypeScript
Самописный UI без готовых CSS библиотек/фреймворков
Приветствуется использование препроцессора SASS(SCSS)
Приветствуется организация стилей с использованием CSS Modules
Можно стилизовать стандартные поля ввода и выпадающие списки в рамках API, доступного нативно в браузерах, т.е. не нужно самостоятельно реализовывать компоненты (например, выпадающие списки)
Приветствуется использование менеджера состояний Effector
Приветствуется использование современных браузерных API и технологий
Приветствуется использование библиотек для работы с данными в функциональном стиле: fp-ts, ramda
Можно использовать любой провайдер данных и API