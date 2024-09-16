import Joi from "joi";
import EventLogType from "../enums/eventLogType";
import EventLogSeverity from "../enums/eventLogSeverity";

const enumValues = (enumObj: object) => {
  return Object.values(enumObj).filter((value) => typeof value === "string");
};

export const createEventLogValidator = Joi.object({
  description: Joi.string()
    .messages({
      "string.empty": "description field can't be empty",
    })
    .required(),
  type: Joi.string()
    .valid(...enumValues(EventLogType))
    .messages({
      "any.only": `type must be any of ${enumValues(EventLogType)}`,
      "string.empty": "type can't be empty",
    })
    .required(),
  severity: Joi.string()
    .valid(...enumValues(EventLogSeverity))
    .messages({
      "any.only": `severity must be any of ${enumValues(EventLogSeverity)}`,
      "string.empty": "severity can't be empty",
    })
    .required(),
  date: Joi.date()
    .iso()
    .messages({
      "date.base": "date must be a valid date",
      "date.empty": "date can't be empty",
    })
    .required(),
});
