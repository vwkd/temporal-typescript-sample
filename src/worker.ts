import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities/index';

async function run() {
  const connection = await NativeConnection.connect({
    address: 'localhost:7233',
  });
  
  const worker = await Worker.create({
    connection,
    namespace: 'default',
    taskQueue: 'hello-world',
    workflowsPath: require.resolve('./workflows'),
    activities,
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
