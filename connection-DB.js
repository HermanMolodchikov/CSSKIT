const mysql = require('mysql2');
  
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3308",
  user: "herman",
  database: "users",
  password: "816101"
});
// тестирование подключения
connection.connect(function(err){
    if (err) {
      return console.log("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});
let query = "SELECT * FROM user";

connection.query(query, (err, result, field) =>{
  // console.log(err);
  // console.log(result);
  // console.log(field);
  console.log(result[1]["secondname"]);
}); 

//закрытие подключения
connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});