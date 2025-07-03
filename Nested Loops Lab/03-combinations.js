function combinations(n) {

 let validCombinationCount = 0;

 for(let i = 0; i <= n; i++) {
  for (let x = 0; x <= n; x++) {
   for (let y = 0; y <= n; y++) {
    if (i + x + y === n) {
     validCombinationCount++;
    }
   }
  }
 }

 console.log(validCombinationCount);
 
}
combinations(25);
