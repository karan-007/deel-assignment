import { useCallback, useEffect, useState } from "react";
import { callApi } from "../../../Utils/callApi";
import { debounce } from "../../../Utils/debounce";
import { substringToBold } from "../../../Utils/substringToBold";

type Props = {
  url: string;
};

const useAutoComplete = ({ url }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setloading] = useState(false);

  const debounceApiCall = debounce((value: string) => {
    callApi(`${url}${value}`)
      .then((res) => {
        const countriesName: string[] = [];
        console.log(res.isError);
        res.forEach((country: { name: { official: string } }) => {
          countriesName.push(substringToBold(country.name.official, value));
        });
        setSuggestions(countriesName);
        setloading(false);
      })
      .catch(() => {
        setSuggestions([]);
        setloading(false);
      });
  }, 500);

  const onSearch = useCallback((e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchText(value);
    if (value?.length > 1) {
      setloading(true);
      debounceApiCall(value);
    }
  }, []);

  const onSuggestionClick = (country: string) => {
    setSearchText(country);
    setSuggestions([]);
  };

  const onClear = () => {
    setSearchText("");
    setSuggestions([]);
  };
  useEffect(() => {
    if (searchText?.length < 2 && suggestions?.length) {
      setSuggestions([]);
    }
  }, [searchText, suggestions]);

  return {
    searchText,
    suggestions,
    onSearch,
    onSuggestionClick,
    loading,
    onClear,
  };
};

export default useAutoComplete;
