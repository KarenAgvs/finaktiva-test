import Joi from "joi";
import EventLogType from "../enums/eventLogType";
import EventLogSeverity from "../enums/eventLogSeverity";

const enumValues = (enumObj: object) => {
  return Object.values(enumObj).filter((value) => typeof value === "string");
};

export const getEventLogWithFiltersValidator = Joi.object({
  id: Joi.number().positive().messages({
    "number.base": "id must be a number",
    "number.empty": "id can't be empty",
    "number.positive": "id must be a positive number",
  }),
  dateMin: Joi.date()
    .iso()
    .max(
      Joi.ref("dateMax", {
        adjust: (value) => value ?? new Date().toISOString().split("T")[0],
      })
    )
    .messages({
      "date.max":
        "dateMin must be less than or equal to dateMax or today's date if dateMax is not provided",
      "date.base": "dateMin must be a valid iso date",
      "date.empty": "dateMin can't be empty",
    }),
  dateMax: Joi.date().iso().max("now").messages({
    "date.max": "dateMax must be less than or equal to today's date",
    "date.base": "dateMax must be a valida iso date",
    "date.empty": "dateMax can't be empty",
  }),
  description: Joi.string().messages({
    "string.empty": "description field can't be empty",
  }),
  type: Joi.string()
    .valid(...enumValues(EventLogType))
    .messages({
      "any.only": `type must be any of ${enumValues(EventLogType)}`,
      "string.empty": "type can't be empty",
    }),
  severity: Joi.string()
    .valid(...enumValues(EventLogSeverity))
    .messages({
      "any.only": `severity must be any of ${enumValues(EventLogSeverity)}`,
      "string.empty": "severity can't be empty",
    }),
});
