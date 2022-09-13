import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/RoutesPage";
function App() {
  return (
    <BrowserRouter>
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
