import amqp from "amqplib";

let connection: amqp.Connection;
let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(
      process.env.BROKER_URL ?? "amqp://localhost"
    );
    channel = await connection.createChannel();
    console.log("Connected to RabbitMQ");
  } catch (error) {
    console.error("Failed to connect to RabbitMQ", error);
    throw error;
  }
};

export const sendToQueue = async (queue: string, message: string) => {
  if (!channel) {
    throw new Error("RabbitMQ channel is not initialized");
  }
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
  console.log(`Message sent to queue: ${queue}`);
};

export const closeRabbitMQ = async () => {
  await channel.close();
  await connection.close();
};
