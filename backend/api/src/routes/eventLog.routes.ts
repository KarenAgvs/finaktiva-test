import { Router } from "express";
import createEventLog from "../controllers/createEventLog.controller";
import getEventLog from "../controllers/getEventLog.controller";
import validateEventLogFilters from "../middlewares/validateEventLogFilters";
import validateEntryEventLogs from "../middlewares/validateEntryEventLog";
import deleteEventLog from "../controllers/deleteEventLog.controller";

const router = Router();

router.post("/", validateEntryEventLogs, createEventLog);
router.get("/", validateEventLogFilters, getEventLog);
router.delete("/:id", deleteEventLog);

export default router;
