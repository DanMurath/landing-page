import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./comp/Navbar";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};
