let rootElement = document.documentElement;
let styles = getComputedStyle(rootElement);
console.log (styles);
let mainColor = styles.getPropertyValue('--main-bg');
console.log (mainColor);
console.log(String(mainColor).trim());
rootElement.style.setProperty('--main-bg', '#cdf');

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "usersdb",
//     password: "пароль_от_сервера"
// });
// connection.connect(function(err){
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else{
//     console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
//  // закрытие подключения
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });