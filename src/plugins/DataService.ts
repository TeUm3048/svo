import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8010/proxy/api/v1/public',
    // https://researchinspb.ru/api/v1/public/vacancy/
    timeout: 10000,
    headers: {}
})

export const ds = {
    asyncApi() {
        api({ method: 'get', url: '/vacancy' })
    },
    getVacancyInfo() {
        return api({ method: 'get', url: '/vacancy' })
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(e => {
                console.log(e);
                return Promise.reject(e);
            })
    },
    getConsole() {
        console.log('sdfsd');
    },
    getVacancies(value: string, page = 1) {
        return api({ method: 'get', url: `/vacancy/?page=${page}&search=${value ? value : ''}&sort=-updatedAt` })
            .then(response => {
                response.data.nextPage = response.data.next ? page + 1 : null
                response.data.previousPage = response.data.previous ? page + 1 : null;
                return Promise.resolve(response.data);
            })
            .catch(e => {
                console.log(e);
                return Promise.reject(e);
            })
    },
    async getAllVacancies(value: string) {
        const url = `/vacancy/?search=${value ? value : ''}&sort=-updatedAt`;
        fetchAllPages(url)
            .then((allResults) => {
                return allResults;
            })
            .catch((error) => {
                console.error("Ошибка при выполнении запроса:", error);
            });
    }
}

async function fetchAllPages(url: string): Promise<any> {
    try {
        const response = await api.get(url);
        const data = response.data;
        const results = data.results;
        console.log(data.next);
        // Если есть следующая страница, рекурсивно вызываем функцию
        if (data.next) {
            console.log(results);
            const nextResults = await fetchAllPages(data.next);
            results.push(...nextResults); // Add nextResults to the results array
        }
        return results; // Return the modified results array
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
    }
}

export default ds;
