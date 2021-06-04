import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather defaultCity="Berlin" />
        <Details />
      </div>
    </div>
  );
}

export default App;
