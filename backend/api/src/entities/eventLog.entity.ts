import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import EventLogType from "../enums/eventLogType";
import EventLogSeverity from "../enums/eventLogSeverity";

@Entity({ name: "event_log" })
export class EventLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: EventLogType,
  })
  type: EventLogType;

  @Column({
    type: "enum",
    enum: EventLogSeverity,
  })
  severity: EventLogSeverity;

  @Column({ type: "date" })
  date: string;
}
