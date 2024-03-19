import { ApiService } from "./services.js";

const button = document.getElementById('send_btn');
const service = new ApiService;

button.addEventListener('click', async (e) => {
    e.preventDefault();

    const {average_salary, count_days} = document.forms['form'];
    if(checkFields(average_salary.value, count_days.value)) {
        const response = await service.getCalculate(average_salary.value, count_days.value);
        if(response.status == 200) {
            response.json().then(data => alert(`Результаты расчета: ${data['vacationPay']}`));
        } else if(response.status == 400) {
            response.json().then(data => alert(`Ошибка валидации полей: ${data['message']}`));
        }
    } else {
    alert('Числа в полях должны быть положительными!');
    document.forms['form'].reset();
    }
})

function checkFields(salary, count_days) {
    return salary>0 && count_days>0;
}