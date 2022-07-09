// initialize menu elements
const message = ("Smello World");
alert(message);
const quiz = new Map([
    ["Why so much inflaction?","Democrats"],
    ["Why are gas prices so high?","Democrats"],
    ["What happened to our country?","Democrats"]
  ]);

 // initialize score
let score = 0;

for(const [question,answer] of quiz.entries()){

  // get answer from user
  const response = prompt(question);
  // check if answer is correct
  if(response === answer){
    alert('Correct!');
    // increase score by 1
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`);
  }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
