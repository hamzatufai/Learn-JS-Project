console.log("========== Random Guessing Game ==========");
console.log("1) Easy 2) Medium 3) Hard");
const gamelevel = parseInt(
  prompt("Enter your game level mention on above list: "),
);

let randomUser;
let chances;
if (isNaN(gamelevel) || gamelevel <= 0 || gamelevel > 3) {
  console.log("Invalid user input eneterd what we aquire");
} else if (gamelevel == 1) {
  randomUser = Math.floor(Math.random() * 100) + 1;
  chances = 10;
} else if (gamelevel == 2) {
  randomUser = Math.floor(Math.random() * 100) + 1;
  chances = 5;
} else {
  randomUser = Math.floor(Math.random() * 100) + 1;
  chances = 3;
}

let score = 100;
let won = false;

for (let i = 1; i <= chances; i++) {
  const userInput = parseInt(
    prompt(`Enter your [${i}] guessing number b/w(1-100): `),
  );

  if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    console.log("Invalid User Input");
  } else if (userInput != randomUser) {
    score -= 10;
    if (randomUser > userInput) {
      console.log("Hint: Guessing number is low. Think any high number");
    } else if (randomUser < userInput) {
      console.log("Hint: Guessing number is high. Think any low number");
    }
    console.log(
      `You enetered ${userInput} Guessing number was wrong try again!.`,
    );
  } else {
    console.log("Guessing number is absoultely correct Congratulations 🎉🎉.");
    won = true;
    break;
  }
}
if (!won) {
  console.log(`Game over! Correct number was: ${randomUser}`);
}
let grade;
if (score >= 90) grade = "A+";
else if (score >= 80) grade = "A-";
else if (score >= 70) grade = "B+";
else if (score >= 65) grade = "B-";
else if (score >= 60) grade = "C";
else if (score >= 50) grade = "D";
else grade = "Fail";

console.log("=/======= Result:- ==========/=");
console.log(`Your Score: ${score}`);
console.log(`Final Grade: ${grade}`);
