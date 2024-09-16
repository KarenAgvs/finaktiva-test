import { NextFunction, Request, Response } from "express";
import { getEventLogWithFiltersValidator } from "../schemas/getEventLogWithFIlters.schema";
import ResponseModel from "../utils/response";

const validateEventLogFilters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Object.keys(req.query).length === 0) {
    return next();
  }

  const { error } = getEventLogWithFiltersValidator.validate(req.query);

  if (error) {
    return res.status(400).json(
      ResponseModel.error("Invalid filters", {
        error: error.details.map((detail) => detail.message).join(", "),
      })
    );
  }
  next();
};

export default validateEventLogFilters;
