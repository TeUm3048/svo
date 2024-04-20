import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8010/proxy/api/v1/public',
    timeout: 10000,
    headers: {}
})

export const ds = {
    asyncApi() {
        api({ method: 'get', url: '/vacancy' })
    },
    getVacancyInfo() {
        return api({ method:'get', url: '/vacancy'})
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
    }
}

export default ds;
