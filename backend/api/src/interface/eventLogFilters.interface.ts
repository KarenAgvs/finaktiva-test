interface EventLogFilters {
  id?: number;
  description?: string;
  type?: string;
  severity?: string;
  dateMin?: string;
  dateMax?: string;
}

export default EventLogFilters;
