let counter = 0;
function inc() { counter++; }

for (let i = 0; i < 10; i++, inc());
console.log(counter);