type TextFieldParams = {
  description: string;
  label: string;
  onChange?: any;
};

export const TextFieldDescription = ({
  description,
  label,
  onChange,
}: TextFieldParams) => {
  return (
    <div>
      <label className="text-tertiary">{label}</label>
      <textarea
        onChange={onChange}
        value={description}
        className="border border-secondary w-full bg-background-primary text-tertiary focus:outline-none focus:border-2 rounded-sm resize-none p-2"
      ></textarea>
    </div>
  );
};
