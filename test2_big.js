const size = 100_000_000;

// PACKED array scenario:
console.time("PACKED");
const packed = [];
for (let index = 0; index < size; index++) {
  packed.push(index);
}
console.timeEnd("PACKED");

// HOLEY array scenario:
console.time("HOLEY");
const holey = new Array(size);
for (let index = 0; index < size; index++) {
  holey[index] = index;
}
console.timeEnd("HOLEY");
