import { Client } from "@temporalio/client";
import { hello } from "./workflows/index.js";

const client = new Client();

const handle = await client.workflow.start(hello, {
  taskQueue: "taskqueue-1",
  args: ["Temporal"],
  workflowId: `workflow-${Math.random().toString(36).slice(2)}`,
});

console.log(`Started workflow ${handle.workflowId}`);

const result = await handle.result();

console.log(result);
