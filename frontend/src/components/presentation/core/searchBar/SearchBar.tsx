type searchBarParams = {
  onChange?: any;
  value?: string;
};

export const SearchBar = ({ onChange, value }: searchBarParams) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder="Search by description..."
      className="bg-background-primary border border-secondary rounded-sm p-2 w-full h-14 focus:ring-white text-tertiary"
      type="text"
    />
  );
};
