import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Details from "./Details";

function App() {
  return (
    <header className="App-header">
      <div className="App">
        <div className="container">
          <Search />
          <Weather />
          <Details />
        </div>
      </div>
    </header>
  );
}

export default App;
