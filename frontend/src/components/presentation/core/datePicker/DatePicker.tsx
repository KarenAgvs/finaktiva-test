import "./DatePicker.css";

type DatePickerParams = {
  date?: string;
  label?: string;
  onChange?: any;
};

export const DatePicker = ({ date, label, onChange }: DatePickerParams) => {
  return (
    <div>
      {label && <label className="text-tertiary">{label}</label>}
      <input
        onChange={onChange}
        value={date}
        max={new Date().toISOString().split("T")[0]}
        className="bg-background-primary border border-secondary text-tertiary rounded-sm w-full min-h-14 p-2 cursor-pointer focus:outline-none focus:border-2"
        type="date"
      />
    </div>
  );
};
