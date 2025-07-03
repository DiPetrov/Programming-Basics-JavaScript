function movieRatings(input) {
  let moviesAmount = Number(input[0]);

  let movieHighestRating = 0;
  let movieHighestRatingName = '';
  let movieLowestRating = 0;
  let movieLowestRatingName = '';
  let movieAverageRating = 0;

  let counter = 1;

  for (let i = 1; i <= moviesAmount; i++) {
    let currentMovie = input[counter++];
    let currentRating = Number(input[counter++]);

    movieAverageRating += currentRating;

    if (movieLowestRating === 0) {
      movieLowestRating = currentRating;
      movieLowestRatingName = currentMovie;
    }

    if (currentRating > movieHighestRating) {
      movieHighestRating = currentRating;
      movieHighestRatingName = currentMovie;
    } 
    
    if (currentRating < movieLowestRating) {
      movieLowestRating = currentRating;
      movieLowestRatingName = currentMovie;
    }

  }

  console.log(
    `${movieHighestRatingName} is with highest rating: ${movieHighestRating.toFixed(
      1
    )}`
  );
  console.log(
    `${movieLowestRatingName} is with lowest rating: ${movieLowestRating.toFixed(
      1
    )}`
  );
  console.log(
    `Average rating: ${(movieAverageRating / moviesAmount).toFixed(1)}`
  );
}

// movieRatings([
//   '5',
//   'A Star is Born',
//   '7.8',
//   'Creed 2',
//   '7.3',
//   'Mary Poppins',
//   '7.2',
//   'Vice',
//   '7.2',
//   'Captain Marvel',
//   '7.1',
// ]);

movieRatings([
  '3',
  'Interstellar',
  '8.5',
  'Dangal',
  '8.3',
  'Green Book',
  '8.2',
]);

// movieRatings(["5","Interstellar", "3", "Dangal", "8.3", "Green Book", "2", "Creed 2", "10", "Doom", "1"])
