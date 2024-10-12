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




/* else if 문 */

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();   //'Friday';

// if(dayOfWeek === 'Monday' ){
//     console.log("UHHHH I HATE MONDATS!")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I LOVE SATURDAYS")
// } else if (dayOfWeek === 'Friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
// } else {
//     console.log("MEH")
// } 




// 0 - 5 FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

// const age = 8;

// if(age < 5) {
//     console.log("You are a baby, You get in for free")
// } else if (age < 10){
//     console.log("You are a child, You pay 10$")
// } else if (age < 65) {
//     console.log("You are a ADULT. You pay 20$")
// } else if (age > 65) {
//     console.log("You are a SENIOR. You pay 10$")
// }


/* let을 사용한 if문 */

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD")
} else {
    console.log("PASSWORD TOO SHORT Must be 6+ characters")
}
// Password cannot include space

if(password.indexOf(' ') === -1 ) {
    console.log("Good job! No space!")
} else {
    console.log("Password cannot contain spaces!")
}