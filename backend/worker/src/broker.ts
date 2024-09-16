import amqp from "amqplib";

export async function createChannel(): Promise<amqp.Channel> {
  const connection = await amqp.connect(process.env.BROKER_URL!);
  const channel = await connection.createChannel();
  return channel;
}
