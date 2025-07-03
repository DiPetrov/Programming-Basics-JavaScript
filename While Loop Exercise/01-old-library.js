function oldLibrary(input) {

  // Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). Докато Ани не намери любимата си книга или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). Книгите в библиотеката са свършили щом получите текст "No More Books".

  let favouriteBook = input[0];
  let booksCount = 0;
  let index = 1;
  let currentBook = input[index];
  index++;

  while (currentBook !== 'No More Books') {
    let bookTitle = currentBook;

    if (bookTitle === favouriteBook) {
      console.log(`You checked ${booksCount} books and found it.`);
      return;
    }

    booksCount += 1;
    currentBook = input[index];
    index++;
  }

  console.log(`The book you search is not here!`);
  console.log(`You checked ${booksCount} books.`);
}

// oldLibrary(['Troy', 'Stronger', 'Life Style', 'Troy']);
oldLibrary([
  'The Spot',

  'Hunger Games',

  'Harry Potter',

  'Torronto',

  'Spotify',

  'No More Books',
]);

// oldLibrary([
//   'Bourne',

//   'True Story',

//   'Forever',

//   'More Space',

//   'The Girl',

//   'Spaceship',

//   'Strongest',

//   'Profit',

//   'Tripple',

//   'Stella',

//   'The Matrix',

//   'Bourne',
// ]);
