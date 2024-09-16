type RegistryButtonParams = {
  disabled?: boolean;
  onClick: any;
};

export const RegistryButton = ({ disabled, onClick }: RegistryButtonParams) => {
  return (
    <button
      disabled={disabled}
      className={`bg-secondary text-primary w-full h-10 rounded-md text-sm font-medium ${
        disabled ? "opacity-50" : "opacity-100  "
      }`}
      onClick={onClick}
    >
      Registry
    </button>
  );
};
