let isPresent : number = 1;
let WAGE_PER_HOUR = 20;
let FULL_DAY_HOUR = 8;
let empCheck : number = Math.round(Math.random());
if (empCheck == 1) {
    var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Employee daily wage is " + dailyWage);
}
else {
    console.log("Enployee is absent");
}
