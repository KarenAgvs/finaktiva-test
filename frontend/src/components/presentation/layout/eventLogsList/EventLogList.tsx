import { EventLog } from "../../../types/eventLog/eventLog";
import { EventLogCard } from "../../core/eventLogCard/EventLogCard";

type EventLogListParams = {
  events: EventLog[];
  onDelete: (id: number) => void;
};

export const EventLogList = ({ events, onDelete }: EventLogListParams) => {
  return (
    <div className="w-full  p-4 rounded-md flex flex-grow flex-wrap overflow-y-scroll gap-10 justify-center">
      {events.length > 0 ? (
        events.map((event) => (
          <EventLogCard onDelete={onDelete} key={event.id} event={event} />
        ))
      ) : (
        <div>
          <p className="text-tertiary">No logs yet.</p>
        </div>
      )}
    </div>
  );
};
