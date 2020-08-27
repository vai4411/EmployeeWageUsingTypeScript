// constants
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const DAY_PER_MONTH = 20;
// variables
let day = 0;
let totalWage = 0;
let dailyWage = 0;
let workingHours = 0;
let totalHours = 0;
let dailyWageMap = new Map();
let monthlyWageMap = new Map();
class EmployeeWageDetails {
    constructor(dailyWage, workingHours) {
        this.dailyWage = dailyWage;
        this.workingHours = workingHours;
    }
}
let calculateDailyWage = (empCheck) => {
    switch (empCheck) {
        case 1:
            dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            workingHours = FULL_DAY_HOUR;
            break;
        case 2:
            dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
            workingHours = PART_TIME_HOUR;
            break;
        default:
            dailyWage = 0;
            workingHours = 0;
            break;
    }
    return new EmployeeWageDetails(dailyWage, workingHours);
};
let monthlyWage = () => {
    while (day < 20 && totalHours < 100) {
        let empCheck = Math.round(Math.random() * 2);
        let empDetails = calculateDailyWage(empCheck);
        dailyWageMap.set(day + 1, empDetails.dailyWage);
        totalWage += empDetails.dailyWage;
        totalHours += empDetails.workingHours;
        day++;
    }
    monthlyWageMap.set(totalWage, dailyWageMap);
    return totalWage;
};
console.log("Employee monthly wage is " + monthlyWage());
var entries = monthlyWageMap.get(totalWage).entries();
for (let entry = 0; entry < dailyWageMap.size; entry++) {
    console.log(entries.next().value);
}
//# sourceMappingURL=app.js.map