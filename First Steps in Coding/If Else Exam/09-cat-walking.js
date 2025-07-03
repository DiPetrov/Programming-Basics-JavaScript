function catWalking(walkMinutesPerDay, walksPerDay, CatCaloriesPerDay) {
  let caloriesBurned = walkMinutesPerDay * 5 * walksPerDay;

  if (caloriesBurned >= CatCaloriesPerDay / 2) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}
catWalking(30, 3, 600);
catWalking(15, 2, 500);
