import "./App.css";
import Button from "./modules/Button.js";
function App() {
  return (
    <div className="App">
      <Button weight="bold" text="Important" />
      <Button text="Not Important" />
    </div>
  );
}

export default App;
