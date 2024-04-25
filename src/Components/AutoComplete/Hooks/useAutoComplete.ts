import { useCallback, useState } from "react";
import { callApi } from "../../../Utils/callApi";
import { debounce } from "../../../Utils/debounce";
import { substringToBold } from "../../../Utils/substringToBold";

type Props = {
  url: string;
};

const useAutoComplete = ({ url }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const debounceApiCall = debounce((value: string) => {
    callApi(`${url}${value}`)
      .then((res) => {
        const countriesName: string[] = [];
        console.log(res.isError);
        res.forEach((country: { name: { official: string } }) => {
          countriesName.push(substringToBold(country.name.official, value));
        });
        setSuggestions(countriesName);
      })
      .catch(() => {
        setSuggestions([]);
      });
  }, 500);

  const onSearch = useCallback((e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchText(value);
    debounceApiCall(value);
  }, []);

  const onSuggestionClick = (country: string) => {
    setSearchText(country);
    setSuggestions([]);
  };
  return {
    searchText,
    suggestions,
    onSearch,
    onSuggestionClick,
  };
};

export default useAutoComplete;
