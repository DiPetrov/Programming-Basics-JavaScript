function easterEggs(input) {
  /*На Великден семейството на Деси се събира и тя решава да организира "битка" между великденски яйца.
Правилата на "битката" са следните:
• Участват двама играчи
• Всеки от тях започва с определен брой яйца
• При получаване на команда "one" -> първият играч печели => яйцата на втория намаляват с едно
• При получаване на команда "two" -> вторият играч печели => яйцата на първия намаляват с едно
• Играта приключва, ако някой от играчите остане без яйца или до получаване на команда "End"*/

  let eggsPlayerOne = input[0];
  let eggsPlayerTwo = input[1];

  let index = 2;

  let command = input[index];

  while (command !== 'End') {
    let currentEggs = input[index];

    if (currentEggs === 'one') {
      eggsPlayerTwo -= 1;
    } else if (currentEggs === 'two') {
      eggsPlayerOne -= 1;
    }
    if (eggsPlayerOne < 1) {
      console.log(
        `Player one is out of eggs. Player two has ${eggsPlayerTwo} eggs left.`
      );
      return;
    } else if (eggsPlayerTwo < 1) {
      console.log(
        `Player two is out of eggs. Player one has ${eggsPlayerOne} eggs left.`
      );
      return;
    }

    index++;
    command = input[index];
  }

  console.log(`Player one has ${eggsPlayerOne} eggs left.`);
  console.log(`Player two has ${eggsPlayerTwo} eggs left.`);
}
easterEggs(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End ']);
