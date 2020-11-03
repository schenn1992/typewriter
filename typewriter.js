const sentence = "hello there from lighthouse labs";

let timeCount = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeCount);
  timeCount += 50;
};

setTimeout(() => {process.stdout.write("\n")}, timeCount);


