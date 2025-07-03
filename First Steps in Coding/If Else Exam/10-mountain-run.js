function mountainRun(recordSeconds, distanceMeters, timeForOneMeterSeconds) {
  let terrainSlow = Math.floor(distanceMeters / 50) ;
  let georgiSlow = terrainSlow * 30;
  let georgiTime = distanceMeters * timeForOneMeterSeconds + georgiSlow;

  if (georgiTime < recordSeconds) {
    console.log(`Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
  } else {
    console.log(
      `No! He was ${(georgiTime - recordSeconds).toFixed(2)} seconds slower.`
    );
  }
}
// mountainRun(10164, 1400, 25);
mountainRun(5554.36, 1340, 3.23);
mountainRun(1377, 389, 3);
