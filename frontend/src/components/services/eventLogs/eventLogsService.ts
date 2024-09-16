import { CreateEventLog } from "../../types/eventLog/createEventLog";
import { EventLog } from "../../types/eventLog/eventLog";
import { EventLogFilters } from "../../types/eventLog/eventLogFilters";
import { ResponseApi } from "../../types/responseApi/responseApi";
import { apiService } from "../../utils/api/apiService";

const baseEndpoint = "/event-logs";

export const createEventLog = async (
  eventLog: CreateEventLog
): Promise<ResponseApi<EventLog | null>> => {
  try {
    const res = await apiService.post<ResponseApi<EventLog>>(
      baseEndpoint,
      eventLog
    );
    return res.data;
  } catch (error) {
    return {
      status: false,
      message: (error as Error).message,
      data: null,
    };
  }
};

export const getEventLog = async (
  params: EventLogFilters = {}
): Promise<ResponseApi<EventLog[]>> => {
  try {
    const res = await apiService.get<ResponseApi<EventLog[]>>(baseEndpoint, {
      params,
    });
    return res.data;
  } catch (error) {
    return {
      status: false,
      message: (error as Error).message,
      data: [],
    };
  }
};

export const deleteEventLog = async (id: number): Promise<boolean> => {
  try {
    await apiService.delete<void>(baseEndpoint + `/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};
