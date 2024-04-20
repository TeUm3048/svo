import axios from "axios";
import fs from "fs";

// URL удаленного сервера, откуда будут получены данные
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Отправляем GET-запрос
axios
  .get(url)
  .then((response) => {
    // Получаем данные в формате JSON
    const data = response.data;

    // Преобразуем данные в строку JSON
    const jsonString = JSON.stringify(data, null, 2);

    // Путь к файлу, куда будут сохранены данные
    const filePath = "./data.json";

    // Сохраняем данные в файл
    fs.writeFile(filePath, jsonString, "utf8", (err) => {
      if (err) {
        console.error("Ошибка при записи в файл:", err);
      } else {
        console.log("Данные успешно сохранены в файл:", filePath);
      }
    });
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запроса:", error);
  });
