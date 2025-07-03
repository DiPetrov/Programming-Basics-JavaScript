function passwordGuessing(num) {

  let username = input[0];
  let password = input[1];
  let currentInput = input[2];
  let index = 3;

  while (currentInput !== password) {
    currentInput = input[index];
    index++;
  }

  console.log(`Welcome ${username}!`);
}


passwordGuessing();
