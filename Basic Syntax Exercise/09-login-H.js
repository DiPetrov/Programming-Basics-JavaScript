function login(arr) {
  let inverted = arr[0];
  let password = '';
  let attempts = 0;

  for (let i = inverted.length - 1; i >= 0; i--) {
    password += inverted[i];
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === password) {
      console.log(`User ${inverted} logged in.`);
      break;
    } else {
      attempts++;

      if (attempts < 4) {
        console.log('Incorrect password. Try again.');
      } else {
        console.log(`User ${inverted} blocked!`);
        break;
      }
    }
  }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
