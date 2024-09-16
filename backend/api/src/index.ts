import "dotenv/config";
import "reflect-metadata";
import express from "express";
import eventLogRouter from "./routes/eventLog.routes";
import { connectRabbitMQ } from "./config/broker";
import cors from "cors";
import morgan from "morgan";
import AppDataSource from "./config/database";

const app = express();
const port = process.env.APP_PORT ?? "3000";
const host = process.env.APP_HOST ?? "localhost";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/event-logs", eventLogRouter);

async function bootstrap() {
  try {
    await connectRabbitMQ();
    await AppDataSource.initialize();
    app.listen(parseInt(port), () => {
      console.log(`Server listening on ${host}:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

bootstrap();
