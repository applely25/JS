let dDay;
let day = "2022-11-17";
const masDay = new Date(day);
const todayTime = new Date();
const diff = todayTime - masDay;

let diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
let diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);

if (diffHour >= 1) diffDay++;

if (diffDay > 0) diffDay--;
if (diffDay == 0) dDay = "D - Day";
else if (diffDay > 0) dDay = `D + ${diffDay}`;
else dDay = `D - ${diffDay * -1}`;

console.log(dDay);
