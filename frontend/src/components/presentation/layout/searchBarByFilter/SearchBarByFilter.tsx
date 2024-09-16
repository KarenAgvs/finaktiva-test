import { useState } from "react";
import { SearchBar } from "../../core/searchBar/SearchBar";
import { DropDown } from "../../core/dropDown/DropDown";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { EventLogSeverity } from "../../../types/enums/eventLogSeverity";
import { DropDownOptions } from "../../../types/component/dropdownOptions.interface";
import { EventLogType } from "../../../types/enums/eventLogType";
import { DatePicker } from "../../core/datePicker/DatePicker";
import { EventLogFilters } from "../../../types/eventLog/eventLogFilters";

type SearchBarByFilterParams = {
  onChangeEvent: (filters: EventLogFilters) => void;
};

export const SearchBarByFilter = ({
  onChangeEvent,
}: SearchBarByFilterParams) => {
  const [filters, setFilters] = useState<EventLogFilters>({});

  const optionSeverity: DropDownOptions[] = [
    {
      option: "-",
      icon: null,
    },
    {
      option: EventLogSeverity.ERROR,
      icon: <XCircleIcon className="text-quarternary size-6" />,
    },
    {
      option: EventLogSeverity.WARNING,
      icon: <ExclamationTriangleIcon className="text-quinary size-6" />,
    },
    {
      option: EventLogSeverity.INFORMATION,
      icon: <InformationCircleIcon className="text-sextenary size-6" />,
    },
  ];

  const optionTypes = [
    {
      option: "-",
    },
    {
      option: EventLogType.API,
    },
    {
      option: EventLogType.FORM,
    },
  ];

  const onChangeFilter = (e: any, field: string) => {
    const newFilters = { ...filters, [field]: e.target.value };
    setFilters(newFilters);
    onChangeEvent(newFilters);
  };

  const deleteFiltersEvent = () => {
    setFilters({});
    onChangeEvent({});
  };

  return (
    <div className="flex flex-col gap-5 mb-12">
      <div className=" w-1/2 flex self-center ">
        <SearchBar
          value={filters.description ?? ""}
          onChange={(e: any) => onChangeFilter(e, "description")}
        />
      </div>
      <div className="flex flex-row justify-center gap-5 ">
        <div>
          <p className="text-tertiary">ID</p>
          <input
            className="bg-background-primary border min-h-14 border-secondary rounded-sm text-tertiary"
            type="number"
            min="0"
            value={filters.id ?? 0}
            onChange={(e: any) => onChangeFilter(e, "id")}
          />
        </div>
        <div className="w-52">
          <DropDown
            label="SEVERITY"
            options={optionSeverity}
            value={filters.severity ?? ""}
            onChange={(e: any) => onChangeFilter(e, "severity")}
          />
        </div>
        <div className="w-44">
          <DropDown
            label="TYPE"
            options={optionTypes}
            value={filters.type ?? ""}
            onChange={(e: any) => onChangeFilter(e, "type")}
          />
        </div>
        <div className="w-36">
          <DatePicker
            label="FROM"
            date={filters.dateMin ?? ""}
            onChange={(e: any) => onChangeFilter(e, "dateMin")}
          />
        </div>
        <div className="w-36">
          <DatePicker
            label="TO"
            date={filters.dateMax ?? ""}
            onChange={(e: any) => onChangeFilter(e, "dateMax")}
          />
        </div>
        <TrashIcon
          onClick={deleteFiltersEvent}
          className="text-quarternary mt-5 size-7 self-center justify-self-center cursor-pointer"
        />
      </div>
    </div>
  );
};
