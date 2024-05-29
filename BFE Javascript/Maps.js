let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
console.log(map.has("b"));
map.delete("b");
console.log(map.has("b"));
console.log(map.size);

for (let key of map.keys()) {
  console.log(key);
}
for (let [key, value] of map) {
  // or map.entries()
  console.log(key, value); // Output: 'a' 1 'c' 3
}
