import axios from "axios";
import fs from "fs";

// URL удаленного сервера, откуда будут получены данные
const url = "http://researchinspb.ru/api/v1/public/vacancy/";

// Отправляем GET-запрос
const initialUrl = "http://researchinspb.ru/api/v1/public/vacancy/?page=1";
fetchAllPages(initialUrl)
  .then((allResults) => {
    // console.log(allResults); // Выводим все результаты

    // Получаем данные в формате JSON
    const data = allResults;
    console.log(allResults);

    // Преобразование JSON

    // Создаем объект для имитации множества
    const uniqueCompetencies = getUniqueCompetencies(data);

    // Преобразуем объект множества в массив для вывода
    // const uniqueCompetenciesArray = Object.keys(uniqueCompetencies);

    console.log(uniqueCompetencies);

    // Преобразуем данные в строку JSON
    const jsonString = JSON.stringify(uniqueCompetencies, null, 2);

    // Путь к файлу, куда будут сохранены данные
    const filePath = "./data.json";

    // Сохраняем данные в файл
    write(filePath, jsonString);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запроса:", error);
  });

function getUniqueCompetencies(results, uniqueCompetencies = {}) {
  // Проходим по каждой вакансии
  results.forEach((vacancy) => {
    // Проходим по каждой компетенции в вакансии
    if (!vacancy.mainVacancyCompetencies) {
      return uniqueCompetencies;
    }
    vacancy.mainVacancyCompetencies.forEach((competency) => {
      // Добавляем компетенцию в множество, используя её имя в качестве ключа
      uniqueCompetencies[competency.id] = competency.name;
    });
  });
  return uniqueCompetencies;
}

function write(filePath, jsonString) {
  fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
    } else {
      console.log("Данные успешно сохранены в файл:", filePath);
    }
  });
}

async function fetchAllPages(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    const results = data.results;
    console.log(data.next);
    // Если есть следующая страница, рекурсивно вызываем функцию
    if (data.next) {
      console.log(results);
      const nextResults = await fetchAllPages(data.next);
      return results.concat(nextResults);
    } else {
      // Если следующей страницы нет, возвращаем текущие результаты
      return results;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
}
