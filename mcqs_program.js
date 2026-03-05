const mcqs = [
  {
    question: "What Started war first?",
    options: { A: "China", B: "Iran", C: "United States", D: "Israel" },
    answer: "C",
  },
  {
    question: "Who has long billistic missiles?",
    options: { A: "China", B: "Iran", C: "United States", D: "North Korea" },
    answer: "D",
  },
];

console.log("=/==========:- MCQs -:===============/=");
console(mcqs.sort(() => Math.random() - 0.5));

let score = 20;

for (let i = 0; i < mcqs.length; i++) {
  const quest = mcqs[i].question;
  const opt = mcqs[i].options;
  const ans = mcqs[i].answer;

  console.log(quest);
  console.log(`A) ${opt.A}\nB) ${opt.B}\nC) ${opt.C}\nD) ${opt.D}`);

  const userInput = prompt("Select right option: ").toUpperCase();



  if (userInput !== ans) {
    console.log("Wrong answer");
    score -= 10;
  } else {
    console.log("Correct answer");
  }
}
console.log("=/==== Result =====/=");
console.log(`Score: ${score}`);
