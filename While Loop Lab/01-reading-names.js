function whileLoop(arg1) {

 let index = 0;
 let command = arg1[index]

 while (command !== 'Stop') {
   console.log(command);
   
   index++
   command = arg1[index]
   
 }
}



whileLoop([
  'Nakov',

  'SoftUni',

  'Sofia',

  'Bulgaria',

  'SomeText',

  'Stop',

  'AfterStop',

  'Europe',

  'HelloWorld',
]);