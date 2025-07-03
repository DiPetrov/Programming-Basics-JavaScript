function vowelsSum(a) {
  let name = a;
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    
    let ch = name[i]
    switch (ch) {
     case "a": sum += 1;break
     case "e": sum += 2;break
     case "i": sum += 3;break
     case "o": sum += 4;break
     case "u": sum += 5;break

    }
  }

  console.log(sum);
  
}
vowelsSum('hello');
// vowelsSum("hi")
// vowelsSum("bamboo")
// vowelsSum("beer")
