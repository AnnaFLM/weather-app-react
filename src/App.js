import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather defaultCity="Berlin" />
      </div>
    </div>
  );
}

export default App;
