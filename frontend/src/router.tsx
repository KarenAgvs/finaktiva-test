import { createBrowserRouter, RouteObject } from "react-router-dom";
import { HomeView } from "./components/presentation/views/home/HomeView";
import { EventLogsView } from "./components/presentation/views/eventLogsView/EventLogsView";

const routes: Array<RouteObject> = [
  {
    path: "",
    element: <HomeView />,
  },
  {
    path: "eventLogs",
    element: <EventLogsView />,
  },
];

const router = createBrowserRouter(routes);

export default router;
