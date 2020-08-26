let isPresent : number = 1;
let WAGE_PER_HOUR = 20;
let FULL_DAY_HOUR = 8;
let PART_TIME_HOUR = 4;

let empCheck : number = Math.round(Math.random() * 10) % 3;
if (empCheck == 1) {
    var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Employee daily wage is " + dailyWage);
}
else if (empCheck == 2) {
    var dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
    console.log('Part time employee wage is : ' + dailyWage);
}
else {
    console.log("Enployee is absent");
}
