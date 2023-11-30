function Print1toN(n, current = 1) {
  if (current > n) {
    return;
  }
  console.log(current);

  Print1toN(n, current + 1);
}
Print1toN(5);
