import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const onSearch = useCallback((e: { target: { value: string } }) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className="App">
      <input id="auto_complete_input" value={search} onChange={onSearch} />
      <div></div>
    </div>
  );
}

export default App;
