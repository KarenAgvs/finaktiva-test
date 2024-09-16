import { Header } from "../../layout/header/Header";
import { FormRegister } from "../../layout/formRegister/FormRegister";

export const HomeView = () => {
  return (
    <div className="p-9">
      <Header route="/eventLogs" text="Logs List" />
      <FormRegister />
    </div>
  );
};
