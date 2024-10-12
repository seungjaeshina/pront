/* if 문 */

// console.log("BEFORE CONDITIONAL")
// let random = Math.random();
// if (random < 0.5){
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
//     console.log(random);
// }

// if (random >= 0.5){
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
//     console.log(random);
// }

// const dayOfWeek = 'Friday';

/* else if 문 */
// if(dayOfWeek === 'Monday' ){
//     console.log("UHHHH I HATE MONDATS!")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I LOVE SATURDAYS")
// } else if (dayOfWeek === 'Friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// }




// 0 - 5 FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 8;

if(age < 5) {
    console.log("You are a baby, You get in for free")
} else if (age < 10){
    console.log("You are a child, You pay 10$")
} else if (age < 65) {
    console.log("You are a ADULT. You pay 20$")
} else if (age > 65) {
    console.log("You are a SENIOR. You pay 10$")
}