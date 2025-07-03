function graduation(input) {

 let name = input[0];
 let year = 1;
 let failCount = 0;
 let gradeSum = 0;

 let index = 1;
 let grade = Number(input[index]);

 // 2. Test/Condition
 while (year <= 12) {
     if (grade < 4) {
      failCount++;

      if (failCount > 1) {
       console.log(`${name} has been excluded at ${year} grade`);
       return;
       
      }
     } else {
         year++;
     }

     gradeSum += grade;

     // 3. Step/Update
     index++
     grade = Number(input[index]);
 }

let avgGrade = gradeSum / 12;
console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);

}

// graduation([
// "Gosho",
// "5",
// "5.5",
// "6",
// "5.43",
// "5.5",
// "6",
// "5.55",
// "5", 
// "6", 
// "6", 
// "5.43", 
// "5"
// ]);

graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);