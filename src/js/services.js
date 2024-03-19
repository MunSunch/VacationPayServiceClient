import { constants } from './config.js';

export class ApiService {
    async getCalculate(salary, countDays) {
        const url = constants.DOMAIN + constants.API_GET_CALCULATE; 
        const response = await fetch(url, { 
            method: "get",
            headers: {salary, countDays}
        });
        return response;
    }
}