import "dotenv/config";
import { createChannel } from "./broker";
import { handleCreateMessage } from "./handlers/createEventLogHandler";
import { handleDeleteMessage } from "./handlers/deleteEventLogHandler";

(async () => {
  try {
    const channel = await createChannel();
    const create_queue = "create_logs_queue";
    const delete_queue = "delete_logs_queue";
    await channel.assertQueue(create_queue, { durable: true });
    await channel.assertQueue(delete_queue, { durable: true });
    console.log("Worker is listening for messages...");

    channel.consume(create_queue, async (msg) => {
      await handleCreateMessage(msg);
      if (msg !== null) {
        channel.ack(msg);
      }
    });

    channel.consume(delete_queue, async (msg) => {
      await handleDeleteMessage(msg);
      if (msg !== null) {
        channel.ack(msg);
      }
    });
  } catch (err) {
    console.error("Error:", err);
  }
})();
