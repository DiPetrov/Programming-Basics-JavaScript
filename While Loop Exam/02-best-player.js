function bestPlayer(input) {

   let index = 0;
   let command = input[index];

   let goals = 0;
   let player = '';
   index++;

   while (command !== 'END') {
   let currentPlayer = command;
   let currentGoals = Number(input[index]);
     
   if (currentGoals > goals) {
      goals = currentGoals;
      player = currentPlayer;
   }

   if (goals >= 10) {
      break;
   }

   index++;
   command = input[index];
   index++;

   }

   console.log(`${player} is the best player!`);
   if (goals >= 3) {
      console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
   } else {
      console.log(`He has scored ${goals} goals.`);

   }
}
// bestPlayer(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);
// bestPlayer(['Silva', '5', 'Harry Kane', '10']);
// bestPlayer(['Petrov', '2', 'Drogba', '11']);
bestPlayer(['Rooney', '1', 'Junior', '2', 'Paolinio', '2', 'END']);
bestPlayer(['Zidane', '1', 'Felipe', '2', 'Johnson', '4', 'END']);

