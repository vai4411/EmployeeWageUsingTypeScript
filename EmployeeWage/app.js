let isPresent = 1;
let dailyWage = 0;
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
for (let i = 0; i < 10; i++) {
    let empCheck = Math.round(Math.random() * 2);
    console.log(empCheck);
}
let calculateDailyWage = (empCheck) => {
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
};
//console.log("Employee daily wage is " + calculateDailyWage(empCheck));
//# sourceMappingURL=app.js.map