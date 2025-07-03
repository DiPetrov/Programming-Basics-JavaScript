function test([arg1, arg2, arg3]) {
  let size = Number(arg1);
  let initialMetric = arg2.toLowerCase();
  let endMetric = arg3.toLowerCase();

  if (initialMetric === 'mm') {
    size = size / 1000;
  } else if (initialMetric === 'cm') {
    size = size / 100;
  } else if (initialMetric === 'mi') {
    size = size / 0.000621371192;
  } else if (initialMetric === 'in') {
    size = size / 39.3700787;
  } else if (initialMetric === 'km') {
    size = size / 0.001;
  } else if (initialMetric === 'ft') {
    size = size / 3.2808399;
  } else if (initialMetric === 'yd') {
    size = size / 1.0936133;
  }

  if (endMetric === 'mm') {
    size *= 1000;
  } else if (endMetric === 'cm') {
    size *= 100;
  } else if (endMetric === 'mi') {
    size *= 0.000621371192;
  } else if (endMetric === 'in') {
    size *= 39.3700787;
  } else if (endMetric === 'km') {
    size *= 0.001;
  } else if (endMetric === 'ft') {
    size *= 3.2808399;
  } else if (endMetric === 'yd') {
    size *= 1.0936133;
  }

  console.log(size);
}

test([12, 'km', 'ft']);
