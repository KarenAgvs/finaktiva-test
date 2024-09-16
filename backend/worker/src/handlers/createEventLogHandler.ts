import { createMySQLConnection } from "../db";
import { ConsumeMessage } from "amqplib";

interface CreateEventLogMessageData {
  description: string;
  type: string;
  severity: string;
  date: string;
}

export async function handleCreateMessage(
  msg: ConsumeMessage | null
): Promise<void> {
  if (msg === null) return;

  const connection = await createMySQLConnection();
  const data: CreateEventLogMessageData = JSON.parse(msg.content.toString());

  const query =
    "INSERT INTO event_log(description, type, severity, date) VALUES (?, ?, ?, ?)";
  await connection.execute(query, [
    data.description,
    data.type,
    data.severity,
    data.date,
  ]);

  console.log(`Inserted data: ${JSON.stringify(data)}`);
}
