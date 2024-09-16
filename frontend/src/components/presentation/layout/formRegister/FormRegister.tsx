import { DropDownOptions } from "../../../types/component/dropdownOptions.interface";
import { EventLogSeverity } from "../../../types/enums/eventLogSeverity";
import { DropDown } from "../../core/dropDown/DropDown";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { RegistryButton } from "../../core/registryButton/RegistryButton";
import { DatePicker } from "../../core/datePicker/DatePicker";
import { TextFieldDescription } from "../../core/textField/TextField";
import { SelectChangeEvent } from "@mui/material/Select";
import logsImage from "../../../../assets/logsImage.svg";
import { useState } from "react";
import { CreateEventLog } from "../../../types/eventLog/createEventLog";
import { EventLogType } from "../../../types/enums/eventLogType";
import { createEventLog } from "../../../services/eventLogs/eventLogsService";
import { toast } from "react-toastify";

export const FormRegister = () => {
  const [severityOption, setSeverityOption] = useState<string>("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [description, setDecription] = useState<string>("");

  const options: DropDownOptions[] = [
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

  const handleSeveriTyOption = (e: SelectChangeEvent) => {
    const selectedValue = e.target.value;
    setSeverityOption(selectedValue);
  };

  const handleDate = (e: any) => {
    setDate(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDecription(e.target.value);
  };

  const isValid = () => {
    const severityValid = Object.values(EventLogSeverity).includes(
      severityOption as EventLogSeverity
    );
    const descriptionIsValid = description.length > 3;
    const dateIsValid = /^\d{4}-\d{2}-\d{2}/.test(date);

    return severityValid && descriptionIsValid && dateIsValid;
  };

  const resetForm = () => {
    setDate("");
    setSeverityOption("");
    setDecription("");
  };

  const onSubmitCreateLog = async () => {
    const data: CreateEventLog = {
      date,
      description,
      severity: Object.values(EventLogSeverity).find(
        (severity) => severity === severityOption
      )!,
      type: EventLogType.FORM,
    };
    const res = await createEventLog(data);
    if (res.status) {
      toast.success(res.message ?? "Event Log Created Successfully");
      resetForm();
    } else {
      toast.error(res.message ?? "Error");
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around">
        <img src={logsImage} />
        <div className="w-80 flex flex-col gap-16">
          <h1 className="text-primary text-4xl">Event Logs Register</h1>
          <div className="flex flex-col justify-between gap-6">
            <DropDown
              value={severityOption}
              label="SEVERITY"
              onChange={handleSeveriTyOption}
              options={options}
            />
            <DatePicker onChange={handleDate} label="DATE" date={date} />
            <TextFieldDescription
              label="DESCRIPTION"
              onChange={handleDescription}
              description={description}
            />
          </div>
          <RegistryButton onClick={onSubmitCreateLog} disabled={!isValid()} />
        </div>
      </div>
    </>
  );
};
