import { Request, Response } from "express";
import eventLogsService from "../services/eventLog.service";
import ResponseModel from "../utils/response";

const createEventLog = async (req: Request, res: Response) => {
  try {
    const event = req.body;
    const result = await eventLogsService.createEventLog(event);
    res
      .status(201)
      .json(ResponseModel.success(result, "Event log created successfully"));
  } catch (error) {
    res
      .status(500)
      .json(ResponseModel.error(`Error adding to queue: ${error}`));
  }
};

export default createEventLog;
