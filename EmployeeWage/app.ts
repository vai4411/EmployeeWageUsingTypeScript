const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;
const DAY_PER_MONTH: number = 20;
let day: number = 0;
let totalWage: number = 0;
let dailyWage: number = 0;

let calculateDailyWage = (empCheck: number): number => {
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
}

let monthlyWage = (): number => {
    while (day < 20) {
        let empCheck: number = Math.round(Math.random() * 2);
        totalWage += calculateDailyWage(empCheck);
        day++;
    }
    return totalWage;
}

console.log("Employee daily wage is " + monthlyWage());


