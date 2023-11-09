import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "../activities/index.js";

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: "1 minute",
});

export async function hello(name: string): Promise<string> {
  return await greet(name);
}
