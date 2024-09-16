import { Request, Response } from "express";
import eventLogService from "../services/eventLog.service";
import ResponseModel from "../utils/response";
import EventLogFilters from "../interface/eventLogFilters.interface";
import { EventLogEntity } from "../entities/eventLog.entity";

const getEventLog = async (req: Request, res: Response) => {
  try {
    const query: EventLogFilters = req.query;
    let events;

    if (!query) {
      events = await eventLogService.getEventLog();
    } else {
      events = await eventLogService.getEventLogByFilters(query);
    }

    return res
      .status(200)
      .json(ResponseModel.success(events, "Events obtained successfully"));
  } catch (error) {
    res.status(500).json(ResponseModel.error(`Error fetching data: ${error}`));
  }
};

export default getEventLog;
