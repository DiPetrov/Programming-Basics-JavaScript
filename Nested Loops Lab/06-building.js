function building(floorCount, roomsPerFloor) {

for (let currentFloor = floorCount; currentFloor >= 1; currentFloor--) {
 let allFloorRooms = '';

 for (let currentRoom = 0; currentRoom < roomsPerFloor; currentRoom++) {
     
  if (currentFloor === floorCount) {
   allFloorRooms += `L${currentFloor}${currentRoom} `;
  } else if (currentFloor % 2 === 0) {
   allFloorRooms += `O${currentFloor}${currentRoom} `;
  } else {
   allFloorRooms += `A${currentFloor}${currentRoom} `; 
  }
 }

 console.log(allFloorRooms);
}
}
building(6, 4);