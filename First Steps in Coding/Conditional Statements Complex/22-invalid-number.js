function invalidNumber([arg1, arg2, arg3, arg4, arg5, arg6]) {
  let x1 = Number(arg1);
  let y1 = Number(arg2);
  let x2 = Number(arg3);
  let y2 = Number(arg4);
  let x = Number(arg5);
  let y = Number(arg6);

  let onLeftSide = x === x1 && y >= y1 && y <= y2;
  let onRightSide = x === x2 && y >= y1 && y <= y2;
  let onLowerSide = y === y1 && x >= x1 && x <= x2;
  let onUpperSide = y === y2 && x >= x1 && x <= x2;

  if (onLeftSide || onRightSide || onLowerSide || onUpperSide) {
    console.log('Border');
  }
}
invalidNumber([2, -3, 12, 3, 12, -1]);
