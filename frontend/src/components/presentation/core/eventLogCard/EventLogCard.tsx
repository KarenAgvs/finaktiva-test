import { XMarkIcon } from "@heroicons/react/24/outline";
import { EventLog } from "../../../types/eventLog/eventLog";
import "./styles.css";

type EventLogCardParams = {
  event: EventLog;
  onDelete: any;
};

export const EventLogCard = ({ event, onDelete }: EventLogCardParams) => {
  return (
    <div className="bg-dark w-80 h-48 grid grid-cols-4 grid-rows-4 p-5 gap-2 ">
      <div className="col-span-2 text-tertiary">{event.date}</div>
      <div className="flex justify-end col-span-2 cursor-pointer">
        <XMarkIcon
          onClick={() => onDelete(event.id)}
          className="size-6  text-quarternary"
        />
      </div>
      <div className="col-span-4 row-span-2 overflow-y-scroll text-primary ">
        {event.description}
      </div>
      <div className="flex justify-start items-end text-primary">
        Id: {event.id}
      </div>
      <div
        className={`flex justify-center items-end col-span-2 font-medium ${
          event.severity === "ERROR"
            ? "text-quarternary"
            : event.severity === "WARNING"
            ? "text-quinary "
            : event.severity === "INFORMATION"
            ? "text-sextenary"
            : "text-primary"
        }`}
      >
        {event.severity}
      </div>
      <div className="flex justify-end items-end text-primary">
        {event.type}
      </div>
    </div>
  );
};
