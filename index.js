import axios from "axios";
import fs from "fs";

// URL удаленного сервера, откуда будут получены данные
const url = "http://researchinspb.ru/api/v1/public/vacancy/";

// Отправляем GET-запрос
axios
  .get(url)
  .then((response) => {
    // Получаем данные в формате JSON
    const data = response.data;

    // Преобразование JSON

    // Создаем объект для имитации множества
    const uniqueCompetencies = {};

    // Проходим по каждой вакансии
    data.results.forEach((vacancy) => {
      // Проходим по каждой компетенции в вакансии
      vacancy.mainVacancyCompetencies.forEach((competency) => {
        // Добавляем компетенцию в множество, используя её имя в качестве ключа
        uniqueCompetencies[competency.id] = competency.name;
      });
    });

    // Преобразуем объект множества в массив для вывода
    // const uniqueCompetenciesArray = Object.keys(uniqueCompetencies);

    console.log(uniqueCompetencies);

    // Преобразуем данные в строку JSON
    const jsonString = JSON.stringify(data, null, 2);

    // Путь к файлу, куда будут сохранены данные
    const filePath = "./data.json";

    // Сохраняем данные в файл
    // write(filePath, jsonString);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запроса:", error);
  });

function write(filePath, jsonString) {
  fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
    } else {
      console.log("Данные успешно сохранены в файл:", filePath);
    }
  });
}
