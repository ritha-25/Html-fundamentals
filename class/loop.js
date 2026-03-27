// for(let  i=1;i<=20;i++){
    // console.log(i)
    // if(i%2===0){
    // console.log(i)
// }

// let girls=["Mary","keza","muthoni","katy"]
// for(let i=girls.length-1;i>=0;i--){
//     console.log(girls[i])
// }
// let roll=0;
// while(roll!==6){
//     roll=Math.floor(Math.random()*6)+1;
// console.log("you rolled"+roll)
// }
// console.log("rolled 6")
// // let i=1;
// while(i<5){
//       console.log(i)
//     i++
  
// }
// let correctpin=1234
// let enterdpin=0
// while(enterdpin!==correctpin){
//      console.log("the password is corect login")
//     break
   
// }
//     console.log("password incorrect")
// let roll=0
// do{

// }while(roll!==6)
// let guess = 0;
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// while (guess !== secretNumber) {
//     guess = Number(prompt("Guess the number between 1 and 10"));
//     console.log("You guessed: " + guess);
// }

// console.log("Correct! You guessed the number.");
// Self-playing demo version
// Self-playing demo version
let guess = 0;
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
console.log("Secret number should be between 1 and 10");

while(guess !== secretNumber) {
    guess = Math.floor(Math.random() * 10) + 1;
    attempts++;
    
    console.log("Attempt " + attempts + ": Guessed " + guess);
    
    if(guess < secretNumber) {
        console.log("The number is less");
    } else if(guess > secretNumber) {
        console.log("The number is greater!");
    }
    
    if(guess !== secretNumber) {
        console.log("Trying again");
    }
}

console.log("The number was"  + secretNumber);
console.log("  attempts! done"+ attempts );