const submitBtn = document.getElementById("submitButton");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const daysResult = document.getElementById("days-result");
const monthsResult = document.getElementById("months-result");
const yearsResult = document.getElementById("years-result");

const dayName = document.getElementById("day-name");
const monthName = document.getElementById("month-name");
const yearName = document.getElementById("year-name");

const dayRequired = document.getElementById("day-required");
const monthRequired = document.getElementById("month-required");
const yearRequired = document.getElementById("year-required");

const dayInvalid = document.getElementById("day-invalid");
const monthInvalid = document.getElementById("month-invalid");
const yearInvalid = document.getElementById("year-invalid");

const dayWord = document.getElementById("day-word");
const monthWord = document.getElementById("month-word");
const yearWord = document.getElementById("year-word");


submitBtn.addEventListener('click',showResult);

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();


function showResult(){

    let isDayValid;
    let isMonthValid;
    let isYearValid;

    if(dayInput.value === ''){
        dayRequired.style.display = "flex";
        dayInput.style.borderColor = "var(--Light-red)";
        dayName.style.color = "var(--Light-red)";
        dayInvalid.style.display = "none";
        isDayValid = false;
    } else {
        dayRequired.style.display = "none";
        isDayValid = true;
    }

    if(monthInput.value === ''){
        monthRequired.style.display = "flex";
        monthInput.style.borderColor = "var(--Light-red)";
        monthName.style.color = "var(--Light-red)";
        monthInvalid.style.display = "none";
        isMonthValid = false;
    } else {
        monthRequired.style.display = "none";
        isMonthValid = true;
    }

    if(yearInput.value === ''){
        yearRequired.style.display = "flex";
        yearInvalid.style.display = "none";
        yearInput.style.borderColor = "var(--Light-red)";
        yearName.style.color = "var(--Light-red)";
        isYearValid = false;
        
    } else {
        yearRequired.style.display = "none";
        isYearValid = true;
    }

    if(isDayValid)

    if((dayInput.value<1 || dayInput.value >31) && isDayValid){
        dayInput.style.borderColor = "var(--Light-red)";
        dayName.style.color = "var(--Light-red)";
        dayInvalid.style.display = 'flex';
        isDayValid = false;

    } else{
        dayInput.style.borderColor = "var(--Smokey-grey)";
        dayName.style.color = "var(--Smokey-grey)";
        dayInvalid.style.display = 'none';
        isDayValid = true
    }

    if(isMonthValid)

    if((monthInput.value<1 || monthInput.value>12) && isMonthValid){
        monthInput.style.borderColor = "var(--Light-red)";
        monthName.style.color = "var(--Light-red)";
        monthInvalid.style.display = 'flex';
        isMonthValid = false;
    } else {
        monthInput.style.borderColor = "var(--Smokey-grey)";
        monthName.style.color = "var(--Smokey-grey)";
        monthInvalid.style.display = 'none';
        isMonthValid = true
    }
    
    if(isYearValid)

    if(yearInput.value > currentYear && isYearValid){
        yearInput.style.borderColor = "var(--Light-red)";
        yearName.style.color = "var(--Light-red)";
        yearInvalid.style.display = 'flex';
        isYearValid = false;
    } else {
        yearInput.style.borderColor = "var(--Smokey-grey)";
        yearName.style.color = "var(--Smokey-grey)";
        yearInvalid.style.display = 'none';
        isYearValid = true
    }

    if(isDayValid && isMonthValid && isYearValid){
        daysResult.innerHTML = currentDay - dayInput.value;
        monthsResult.innerHTML = currentMonth - monthInput.value;
        yearsResult.innerHTML = currentYear - yearInput.value;

        if(monthsResult.innerHTML<0){
            yearsResult.innerHTML = yearsResult.innerHTML - 1;
            monthsResult.innerHTML = 12 + Number(monthsResult.innerHTML);
        }

        if(daysResult.innerHTML<0){
            monthsResult.innerHTML = monthsResult.innerHTML -1;
            daysResult.innerHTML = 31 + Number(daysResult.innerHTML);
            if(monthsResult.innerHTML<0){
                monthsResult.innerHTML = 12 + Number(monthsResult.innerHTML);
                yearsResult.innerHTML = yearsResult.innerHTML - 1;
            }
        }

        if(daysResult.innerHTML === '1'){
            dayWord.innerHTML = "day";
        } else {
            dayWord.innerHTML = "days";
        }
        if(monthsResult.innerHTML === '1'){
            monthWord.innerHTML = "month";
        } else {
            monthWord.innerHTML = "months";
        } 
        if(yearsResult.innerHTML === '1'){
            yearWord.innerHTML = "year";
        } else {
            yearWord.innerHTML = "years";
        }

    } else {
        daysResult.innerHTML = "--";
        monthsResult.innerHTML = "--";
        yearsResult.innerHTML = "--"
    }
}

