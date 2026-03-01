import AdminRoutes from "./Router/AdminRoutes";
import "./App.css";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import CursorTrail from "./Components/CursorTrail";

function App() {
  const isDarkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <div className={isDarkmode ? "dark dark:bg-body-dark text-white" : ""}>
      <Toaster />
      <CursorTrail />
      <AdminRoutes />
    </div>
  );
}

export default App;
