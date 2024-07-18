async function showNumbersWithDelay(arr, setPosition, startDelay = 0) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      await delay(500 + startDelay);
    }
    setPosition(arr[i]);
    await delay(500);
    setPosition(0);
    await delay(250);
  }
  return "listo";
}

delay(1000);
setPosition(sequence[0]);
okUpdate;
delay(500);
setPosition(0);
okUpdate;
delay(1000);
setPosition(sequence[1]);
okUpdate;
delay(500);
setPosition(0);
okUpdate;
delay(1000);
setPosition(sequence[2]);
okUpdate;
delay(500);
setPosition(0);
okUpdate;
delay(1000);
setPosition(sequence[3]);
okUpdate;
delay(500);
setPosition(0);
okUpdate;
