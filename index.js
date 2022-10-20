// create global variables
let stages = 1;
points = 0
let user_name = prompt("Enter your username");
alert(
  `\nTo Exit Game type stop as guessing number \nWelcome ${user_name}\n`
)

// Create fucntion to generate random numbers
function generateRandomIntegerInRange(min=1, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Game Loop
while (stages > 0) {
  let computer_answer = generateRandomIntegerInRange(1,stages+1);
  alert(`GAME Stage: ${stages}\n`)
  let user_guess_value = prompt("Enter Your guessing number")

  if (computer_answer == user_guess_value) {
    stages++
    points++
    alert(`You got the answer Moving to the next stage. Total points won: ${points}`)
  } 
  else if (user_guess_value == 'stop' || user_guess_value == 'Stop'){
    alert(`ouch you quit.Total points won: ${points}`)
    break
  } 
  else {
    alert(`Ouch Sorry you failed.Computer choose ${computer_answer} \nTotal point won is ${points}. \nTry again\n`)
  }
}