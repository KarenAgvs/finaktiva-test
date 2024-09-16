import { EventLogSeverity } from "../enums/eventLogSeverity";
import { EventLogType } from "../enums/eventLogType";

export interface EventLog {
  id: number;
  description: string;
  date: string;
  type: EventLogType;
  severity: EventLogSeverity;
}
