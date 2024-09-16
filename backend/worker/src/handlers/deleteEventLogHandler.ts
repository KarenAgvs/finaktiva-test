import { createMySQLConnection } from "../db";
import { ConsumeMessage } from "amqplib";

export async function handleDeleteMessage(
  msg: ConsumeMessage | null
): Promise<void> {
  if (msg === null) return;

  const connection = await createMySQLConnection();
  const id = msg.content.toString();
  console.log(id);
  const query = "DELETE FROM event_log WHERE id = ?";
  await connection.execute(query, [id]);
  console.log(`Deleted entry with id: ${id}`);
}
