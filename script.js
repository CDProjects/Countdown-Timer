const newYears = '1 January 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (new DatenewYearsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);

    console.log(days);
}

// inital call
countdown();

setInterval(countdown, 1000);

