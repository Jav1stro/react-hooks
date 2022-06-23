import logo from "./logo.svg";
import Header from "./components/Header";
import Characters from "./components/Characters";
// import Context from "./context/Context.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <Characters />
    </div>
  );
}

export default App;
