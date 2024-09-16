import { Request, Response } from "express";
import eventLogService from "../services/eventLog.service";
import ResponseModel from "../utils/response";

const deleteEventLog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const isPositiveNumber = (id: string) => /^\d+$/.test(id);

    if (!isPositiveNumber(id)) {
      return res
        .status(400)
        .json(ResponseModel.error("Id must be a positive integer number."));
    }
    await eventLogService.deleteEventeLog(id);
    return res.status(204).json();
  } catch (error) {
    return res
      .status(500)
      .json(ResponseModel.error(`Error adding to queue: ${error}`));
  }
};

export default deleteEventLog;
