const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const DAY_PER_MONTH = 20;
let day = 0;
let totalWage = 0;
let dailyWage = 0;
let calculateDailyWage = (empCheck) => {
    switch (empCheck) {
        case 1:
            console.log("Employee present for full time");
            dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            break;
        case 2:
            console.log("Employee present for part time");
            dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
            break;
        default:
            console.log("Employee is absent");
            dailyWage = 0;
            break;
    }
    return dailyWage;
};
let monthlyWage = () => {
    while (day < 20) {
        let empCheck = Math.round(Math.random() * 2);
        totalWage += calculateDailyWage(empCheck);
        day++;
    }
    return totalWage;
};
console.log("Employee daily wage is " + monthlyWage());
//# sourceMappingURL=app.js.map