import { sendToQueue } from "../config/broker";
import AppDataSource from "../config/database";
import { EventLogEntity } from "../entities/eventLog.entity";
import { EventLog } from "../interface/eventLog.interface";
import EventLogFilters from "../interface/eventLogFilters.interface";

const createEventLog = async (event: EventLog) => {
  const queue = "create_logs_queue";
  const eventString = JSON.stringify(event);
  await sendToQueue(queue, eventString);
  return event;
};

const getEventLog = async () => {
  const repository = AppDataSource.getRepository(EventLogEntity);
  const events = repository.find();
  return events;
};

const getEventLogByFilters = async (query: EventLogFilters) => {
  const alias = "event_log";
  let dateFilters = `${alias}.date`;

  if (query.dateMax && query.dateMin) {
    dateFilters += ` BETWEEN :dateMin AND :dateMax`;
  } else if (query.dateMax) {
    dateFilters += ` <= :dateMax`;
  } else if (query.dateMin) {
    dateFilters += ` >= :dateMin`;
  }

  const filtersArray = [
    dateFilters,
    ...Object.keys(query)
      .filter((key) => !["dateMin", "dateMax", "description"].includes(key))
      .map((key) => {
        return `${alias}.${key} = :${key}`;
      }),
  ];

  if (query.description) {
    query.description = `%${query.description}%`;
    filtersArray.push(`${alias}.description LIKE :description`);
  }

  const filters = filtersArray.join(" AND ");
  const repository = AppDataSource.getRepository(EventLogEntity);
  return repository.createQueryBuilder(alias).where(filters, query).getMany();
};

const deleteEventeLog = async (id: string) => {
  const queue = "delete_logs_queue";
  await sendToQueue(queue, id);
};

export default {
  createEventLog,
  getEventLog,
  getEventLogByFilters,
  deleteEventeLog,
};
