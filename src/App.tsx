import BottomNav from "@features/bottomNav/BottomNav";
import Router from "./routers";

function App() {
  return (
    <div className="App">
      <Router />
      <BottomNav />
    </div>
  );
}

export default App;
