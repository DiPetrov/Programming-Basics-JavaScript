function oscars (input) {

 // TODO:
 // 1. Get known arugements
 // 2. For loop
 //  2.1 Get current judge values
 //  2.2 Calculate judge points 
 //  2.3 Handle 1250.5 points
 // 3. Print result
 //  3.1 Points are for a nominee
 //  3.2 Points ARE NOT enough for a nominee

 let actor = input[0];
 let points = Number(input[1]);
 let judges = Number(input[2]);
 

 let n = input.length - 1;

 for (let i = 3; i <= n; i+=2) {
  let judge = input[i]
  let judgePoints = Number(input[i + 1]);
  
  points += judge.length * judgePoints / 2;

  if (points >= 1250.5) {
   break;
  }
 }

 if (points >= 1250.5) {
  console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
  
 } else {
  let pointsNeeded = 1250.5 - points;
  console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
 }

}

oscars(['Zahari Baharov','205',4,'Johnny Depp','45','Will Smith','29','Jet Lee','10','Matthew Mcconaughey','39',]);
// oscars(['Zahari Baharov','205',4,'Johnny Depp','45','Will Smith','29','Jet Lee','10','Matthew Mcconaughey','39',]);
