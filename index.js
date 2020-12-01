var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.yellowBright("Welcome to Know more about shrutika" + "\n"));

var proceed = confirm(chalk.blueBright("Are you ready to Know more about shrutika "));
if (proceed) {
  var userName = readlineSync.question(chalk.redBright("\n What is Your Name? :  "));
  console.log(chalk.greenBright(( "\n" + "Hello!!! " + userName +" Its nice to have you here!! " + "\n")))
  
} else {
  console.log("Good Bye")
}

var highestScore = [
  {name:"Sanket", score:20}, 
  {name:"Abhijeet", score:19}, 
  {name:"Kaivalya", score:14}
];

var score = 0;
function play(question, answer, options){
  var userAnswer = readlineSync.question(chalk.yellowBright(question, options))
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 5;
  }
  else {
    console.log("You are wrong! ");
    console.log("Correct answer is: ", answer);
    score = score - 1;
  }
  console.log("Your score is : ", score);
  console.log("***************************"); 
}
var Question = [{
  question:"\n"+ "Where do i live? ",
  options:"\n1]Maharashtra \n2]Bengaluru \n3]Hubli \n4]Bihar \nYour answer: ",
  answer:"1"
},
  {
  question: "What is my favourite color? ",  
  answer:"4",
  options:"\n1]White \n2]Blue \n3]Black \n4]Both 2 & 3 \nYour answer: "
  
},
{
  question:"What is my Profession? ",
  answer:"4",
  options:  " \n1]Vlogger \n2]Software Engineer \n3]Professional Photographer \n4]Professor \nYour answer: "
  
},
{
  question:"What is my hobby? ",
  options:"\n1]Singing \n2]Dancing \n3]Travelling \n4]photography \nYour answer: ",
  answer:"3"
},
{
  question:"who i admire most? ",
  options:"\n1]Sandeep Maheshwari \n2]Elon Musk \n3]Naruto \n4]All of above \nYour answer: ",
  answer:"1"
}
]

if(readlineSync.keyInYN(userName + ' do you want to start the quiz?')){
for(var i = 0; i<Question.length; i++){
  var currentQuestion = Question[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
}
}else{
  console.log(chalk.yellow("Thank You..."))
}

console.log(chalk.green(" You scored: ",score + "\n" +"Thank you for participating" ))

var flag = 0;
for(var i=0;i<highestScore.length;i++){
  if(score >= highestScore[i].score){
    console.log(chalk.green('\n'+'Congratulations! '+userName+' You are a Top Scorer, I am Glad That you knew about me!! See You soon'))
    flag = 1;
    console.log(chalk.red('\n'+'ThankYou. Have a Good day'))
    break;
  }
}
if(flag===0){
  console.log(chalk.red("Try Again for getting high score"));
}


for(var i = 0; i<highestScore.length; i++){
  console.log( "\nThese are the Topscores: ")
   console.log(`${highestScore[i].name} => ${highestScore[i].score}` )
}

