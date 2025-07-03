function building(floors, rooms) {
  
  for (let i = floors; i > 0; i--) {
   let allFloors = '';
    for (let x = 0; x < rooms; x++) {
      if (i === floors) {
        allFloors += `L${i}${x} `;
      } else if (i % 2 === 0) {
        allFloors += `O${i}${x} `;
      } else {
        allFloors += `A${i}${x} `;
      }
    }
    console.log(allFloors);
  }
}
building(6, 4);
