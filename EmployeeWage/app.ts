// constants
const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;
const DAY_PER_MONTH: number = 20;

// variables
let day: number = 0;
let totalWage: number = 0;
let dailyWage: number = 0;
let workingHours: number = 0;
let totalHours: number = 0;
let dailyWageMap: Map<number, number> = new Map();
let monthlyWageMap: Map<number, Map<number, number>> = new Map();

class EmployeeWageDetails {
    dailyWage: number;
    workingHours: number;

    constructor(dailyWage: number, workingHours: number) {
        this.dailyWage = dailyWage;
        this.workingHours = workingHours;
    }
}

let calculateDailyWage = (empCheck: number): EmployeeWageDetails => {
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
}

let monthlyWage = (): number => {
    while (day < 20 && totalHours < 100) {
        let empCheck: number = Math.round(Math.random() * 2);
        let empDetails = calculateDailyWage(empCheck);
        dailyWageMap.set(day+1,empDetails.dailyWage);
        totalWage += empDetails.dailyWage;
        totalHours += empDetails.workingHours;
        day++;
    }
    monthlyWageMap.set(totalWage, dailyWageMap);
    return totalWage;
}

console.log("Employee monthly wage is " + monthlyWage());
var entries = monthlyWageMap.get(totalWage).entries();
for (let entry = 0; entry < dailyWageMap.size; entry++) {
    console.log(entries.next().value);
}