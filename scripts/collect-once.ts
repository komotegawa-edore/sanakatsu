import "dotenv/config";
import { runCollectionPipeline } from "../src/lib/collectors/pipeline";

async function main() {
  console.log("Starting one-time collection...");
  const result = await runCollectionPipeline();
  console.log("Result:", JSON.stringify(result, null, 2));

  if (result.errors.length > 0) {
    console.warn("Errors encountered:");
    result.errors.forEach((e) => console.warn("  -", e));
  }
}

main().catch(console.error);
