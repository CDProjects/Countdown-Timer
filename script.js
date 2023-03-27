const newYears = '1 January 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) * 1000;

    console.log(newYearsDate - currentDate);
}

// inital call
countdown();

setInterval(countdown, 1000);

