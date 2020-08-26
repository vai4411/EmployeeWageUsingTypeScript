let isPresent: number = 1;
let dailyWage = 0;
const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;

for (let i = 0; i < 10; i++) {
    let empCheck: number = Math.round(Math.random() * 2);
    console.log(empCheck);
}
let calculateDailyWage = (empCheck: number): number => {
    switch (empCheck) {
        case 1:
            console.log("Full time employee is present");
            dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            break;
        case 2:
            dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
            console.log("Part time employee is present");
            break;
        default:
            console.log("Enployee is absent");
            break;
    }
    return dailyWage;
}
//console.log("Employee daily wage is " + calculateDailyWage(empCheck));


