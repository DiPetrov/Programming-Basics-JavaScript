function cake(input) {

  let width = Number(input[0]);
  let height = Number(input[1]);

  let cakePieces = width * height;

  let index = 2;
  let command = input[index];
  
  while (command !== 'STOP') {
    let currentTake = Number(input[index]);

    if (cakePieces < currentTake) {
      console.log(`No more cake left! You need ${currentTake - cakePieces} pieces more.`);
      return;
    }

    cakePieces -= currentTake;
    
    index++;
    command = input[index];
  }

  console.log(`${cakePieces} pieces are left.`);

}
cake(['10', '10', '20', '20', '20', '20', '21']);