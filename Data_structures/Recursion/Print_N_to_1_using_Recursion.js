function PrintNto1(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  PrintNto1(n - 1);
}
PrintNto1(5);
