function animalType([arg1]) {
  let mammal = arg1;

  switch (mammal) {
    case 'dog':
      console.log('mammal');
      break;
    case 'crocodile':
    case 'tortoise':
    case 'snake':
      console.log('reptile');
      break;
    default:
      console.log('unknown');
      break;
  }
}
animalType(['tortoise']);
