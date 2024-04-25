import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { CallApi } from "./Utils/CallApi";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const onSearch = useCallback((e: { target: { value: string } }) => {
    CallApi(`https://restcountries.com/v3.1/name/${e.target.value}`).then(
      (res) => {
        const countriesName: string[] = [];
        console.log(res);
        res.forEach((country: { name: { official: string } }) => {
          countriesName.push(country.name.official);
        });
        setCountries(countriesName);
      }
    );
    setSearch(e.target.value);
  }, []);
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div className="App">
      <input id="auto_complete_input" value={search} onChange={onSearch} />
      <div id="suggestions"></div>
    </div>
  );
}

export default App;
