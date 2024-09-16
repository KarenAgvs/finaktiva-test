import { EventLogSeverity } from "../enums/eventLogSeverity";
import { EventLogType } from "../enums/eventLogType";

export interface CreateEventLog {
  date: string;
  severity: EventLogSeverity;
  description: string;
  type: EventLogType;
}
