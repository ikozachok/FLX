function formatTime(x) {
  let y = 0;
  let z = 0;

  if ( x < 60) {
    x = x ^ 0;
  } else if (x >= 1440) {
    z = x / 60 / 24 ^ 0;
    x = x - (1440 * z);
    if (x >= 60){
      y = x / 60 ^ 0;
      x = x - (60 * y);
    }
  } else if (x >= 60) {
    y = x / 60 ^ 0;
    x = x - (60 * y);
  }

  return z + ' day(s) ' + y + ' hour(s) ' + x + ' minute(s).'
}

formatTime(2*60*24 + 120 + 45);
formatTime(120);
formatTime(59);
formatTime(3601);