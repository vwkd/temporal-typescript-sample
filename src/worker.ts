import { Worker } from "@temporalio/worker";
import * as activities from "./activities/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const workflowsPathUrl = new URL(
  `./workflows/index${path.extname(import.meta.url)}`,
  import.meta.url,
);

const worker = await Worker.create({
  identity: "worker-1",
  taskQueue: "taskqueue-1",
  workflowsPath: fileURLToPath(workflowsPathUrl),
  activities,
});

await worker.run();
