import { desc, run, task } from "https://deno.land/x/drake@v1.2.5/mod.ts";

desc("Minimal Drake task");
task("hello", [], function() {
  console.info("Hello World!");
});

run()