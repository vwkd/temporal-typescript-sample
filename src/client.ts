import { Connection, Client } from '@temporalio/client';
import { example } from './workflows';

async function run() {
  const connection = await Connection.connect({ address: 'localhost:7233' });

  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(example, {
    taskQueue: 'hello-world',
    args: ['Temporal'],
    workflowId: 'workflow-' + Math.floor(Math.random() * 1000000),
  });

  console.log(`Started workflow ${handle.workflowId}`);

  const result = await handle.result()

  console.log(result);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
