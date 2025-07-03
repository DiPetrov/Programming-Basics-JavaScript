function gramophone(band, album, song) {
let songDuration = (album.length * band.length) * song.length / 2;

let plateRotations = songDuration / 2.5;

let result = Math.ceil(plateRotations);

console.log(`The plate was rotated ${result} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');