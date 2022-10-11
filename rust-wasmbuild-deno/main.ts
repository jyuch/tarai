import { instantiate } from "./lib/rs_lib.generated.js";

const { tarai } = await instantiate();

if (import.meta.main) {
  const start = Date.now();
  const ans = tarai(14, 7, 0);
  const end = Date.now();

  console.log(`${ans} ${end - start}ms`);
}
