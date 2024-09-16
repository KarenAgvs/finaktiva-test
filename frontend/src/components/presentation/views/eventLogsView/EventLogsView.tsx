import { useEffect, useState } from "react";
import { EventLogList } from "../../layout/eventLogsList/EventLogList";
import { Header } from "../../layout/header/Header";
import { SearchBarByFilter } from "../../layout/searchBarByFilter/SearchBarByFilter";
import { EventLog } from "../../../types/eventLog/eventLog";
import {
  deleteEventLog,
  getEventLog,
} from "../../../services/eventLogs/eventLogsService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { EventLogFilters } from "../../../types/eventLog/eventLogFilters";

export const EventLogsView = () => {
  const [events, setEvents] = useState<EventLog[]>([]);
  const [filters, setFilters] = useState<EventLogFilters>({});

  const onDelete = async (id: number) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure to delete the event?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
      confirmButtonColor: "#4B85FF",
    });

    if (isConfirmed) {
      const res = await deleteEventLog(id);
      if (res) {
        toast.success(`Event with id ${id} deleted successfully`);
        setEvents(events.filter((event) => event.id != id));
      }
    }
  };

  const onFiltersChange = (filters: EventLogFilters) => {
    setFilters(filters);
  };

  const cleanFilters = () => {
    return Object.entries(filters).reduce((acc, [key, value]) => {
      const isValidValue = value !== undefined && value !== "";
      const isNotDefaultId = key !== "id" || parseInt(value) !== 0;
      const isNotDefaultSeverity = key !== "severity" || value !== "-";
      const isNotDefaultType = key !== "type" || value !== "-";

      if (
        isValidValue &&
        isNotDefaultId &&
        isNotDefaultSeverity &&
        isNotDefaultType
      ) {
        acc[key as keyof EventLogFilters] = value;
      }

      return acc;
    }, {} as Partial<EventLogFilters>);
  };

  useEffect(() => {
    getEventLog(cleanFilters()).then((res) => {
      if (!res.status) {
        toast.error(res.message);
      } else {
        const data = res.data;
        data.map((event) => {
          return event;
        });
        setEvents(data);
      }
    });
  }, [filters]);

  return (
    <div className="flex flex-col h-screen p-9">
      <Header route="/" text="Register Log" />
      <SearchBarByFilter onChangeEvent={onFiltersChange} />
      <EventLogList events={events} onDelete={onDelete} />
    </div>
  );
};
