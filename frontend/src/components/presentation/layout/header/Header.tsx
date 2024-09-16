import { useNavigate } from "react-router-dom";

type HeaderParams = {
  text: string;
  route: string;
};

export const Header = ({ route, text }: HeaderParams) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex justify-between items-center pb-11 ">
        <h1 className="text-primary text-3xl">finaktiva.</h1>
        <button
          onClick={() => navigate(route)}
          className="bg-primary w-32 h-8 rounded-md text-sm font-medium"
        >
          {text}
        </button>
      </header>
    </>
  );
};
