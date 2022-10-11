function tarai(x: number, y: number, z: number): number {
  if (x > y) {
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
  } else {
    return y;
  }
}

if (import.meta.main) {
  const start = Date.now();
  const ans = tarai(14, 7, 0);
  const end = Date.now();

  console.log(`${ans} ${end - start}ms`);
}
