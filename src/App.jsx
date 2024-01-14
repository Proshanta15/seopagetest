import "./App.css";
import Completed from "./components/Completed";
import Doing from "./components/Doing";
import Incomplete from "./components/Incomplete";
import OverdView from "./components/OverdView";
import ToDo from "./components/ToDo";
import Under from "./components/Under";

function App() {
  return (
    <>
      <div className="main_body">
        <Incomplete />
        <ToDo />
        <Doing />
        <Under />
        <Completed />
        <OverdView />
      </div>
    </>
  );
}

export default App;
