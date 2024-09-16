import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DropDownOptions } from "../../../types/component/dropdownOptions.interface";

type DropDownParams = {
  options: DropDownOptions[];
  label?: string;
  value: string;
  onChange: any;
};
export const DropDown = ({
  options,
  label,
  value,
  onChange,
}: DropDownParams) => {
  return (
    <div>
      {label && <label className="text-tertiary">{label}</label>}
      <Select
        value={value}
        onChange={onChange}
        sx={{
          border: "1px solid #4B85FF",
          color: "#6C7280",
          width: "100%",
          ".MuiSelect-icon": {
            color: "#4B85FF",
          },
        }}
        className="border w-full focus:ring-white"
      >
        {options.map((option, idx) => (
          <MenuItem value={option.option} className="text-tertiary" key={idx}>
            <div className="flex gap-2">
              {option.icon && option.icon}
              {option.option}
            </div>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
