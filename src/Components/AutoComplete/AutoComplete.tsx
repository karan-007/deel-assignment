import useAutoComplete from "./Hooks/useAutoComplete";

const URL = "https://restcountries.com/v3.1/name/";

export default function AutoComplete() {
  const { searchText, suggestions, onSearch, onSuggestionClick } =
    useAutoComplete({ url: URL });
  return (
    <div id="container">
      <input id="auto_complete_input" value={searchText} onChange={onSearch} />
      {!!suggestions.length && (
        <div id="suggestions">
          {suggestions.map((suggestion: string) => {
            return (
              <span
                onClick={() => onSuggestionClick(suggestion)}
                dangerouslySetInnerHTML={{ __html: suggestion }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
