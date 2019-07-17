# final_project
Diploma project - creating a report based on the data obtained from the server.

Структура:
  1-й компонент - header: выбор из списка базы, на которую после подтверждения программа отправит запрос API и получит обратно информацию.

  2-й компонент - left sidebar with list: из полученного объекта JSON в left sidebar будут загружены ключи, которые отобразятся, как список полей, а их в свою очередь мы можем менять.
  Все элементы списка (объекты JSON) можно активировать и деактивировать, от чего будет зависеть наполнение самой таблицы (отчета).
  Перед всем списком будет доп. checkbutton, который будет активировать/деактивировать все элементы sidebar-а.
  Заключением 2-го компонента будет button, которая на основании выбранных элементов sidebar-а будет формировать предварительный просмотр нашего отчета в 3-й компонент.

  3-й компонент - таблица предварительного просмотра. Она формируется после нажатия button "Сформировать Таблицу".

  4-й компонент - находится под sidebar-ом. Ее основная функция это button, которая активирует:
    - сохранение сформированной таблицы на диск с названием, которое будет формироваться из    системной даты;
    - отправление сформированной таблицы на почту. Почту указываем в поле под button           "Отправить Отчет".
// ======================================================================================= //

Structure:
  1st component - header: a choice from the list of the database to which, after confirmation, the program will send an API request and will receive information back.

  The 2nd component - left sidebar with list: from the received JSON object in the left sidebar the keys will be loaded, which will appear as a list of fields, and in turn we can change them.
  All elements of the list (JSON objects) can be activated and deactivated, from which the fullness of the table (report) will depend.
  Before the whole list will be additional. checkbutton, which will activate / deactivate all sidebar elements.
  The conclusion of the 2nd component will be a button, which, based on the selected sidebar elements, will form a preview of our report in the 3rd component.

  The 3rd component is a preview table. It is formed after pressing the button "Generate Table".

  The 4th component is under the sidebar. Its main function is the button, which activates:
    - saving the generated table to a disk with the name that will be generated from the system date;
    - sending the generated table to the post office. We specify the mail in the field under the button "Send Report".
// ======================================================================================= //

План действий:
1. Загрузка объекта с API;
2. Верстка макета;
3. Прочитать ключи JSON объекта, которые передаются в названия CheckBox-ов;
4. Сформировать CheckBox-ы;
5. На основании выбранных CheckBox-ов отображаем таблицу в необходимом окне (3-й компонент);
6. Манипуляции по сохранению отчета;
7. Создание механизма отправки созданного отчета на почту.
// ======================================================================================= //