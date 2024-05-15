import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { DarkModeProvider } from "./Components/Context";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Main />
      </div>
    </DarkModeProvider>
  );
}

export default App;
