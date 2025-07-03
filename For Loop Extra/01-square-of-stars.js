function exercise(arg1) {
  let p = String('*');
  let s = String('*');

  let n = arg1;

  for (let i = 1; i < n; i++) {
    s = s + '*';
  }

  console.log(s);

  for (let k = 1; k <= n - 2; k++) {
    p = p + '';
  p = p + '*';
  }

  for (let j = 1; j <= n - 2; j++) {
    console.log(p);

    console.log(s);
  }
}

exercise(3);
