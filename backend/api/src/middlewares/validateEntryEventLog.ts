import { NextFunction, Response, Request } from "express";
import { createEventLogValidator } from "../schemas/createEventLog.schema";
import ResponseModel from "../utils/response";

const validateEntryEventLogs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = createEventLogValidator.validate(req.body);

  if (error) {
    return res.status(400).json(
      ResponseModel.error("Invalid data", {
        error: error.details.map((detail) => detail.message).join(", "),
      })
    );
  }
  next();
};

export default validateEntryEventLogs;
