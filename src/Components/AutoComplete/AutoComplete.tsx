import useAutoComplete from "./Hooks/useAutoComplete";

const URL = "https://restcountries.com/v3.1/name/";
// This API gives out the list of countries in response, it searches over common name, official name, Country shorthands etc.

export default function AutoComplete() {
  const {
    searchText,
    suggestions,
    onSearch,
    onSuggestionClick,
    loading,
    onClear,
  } = useAutoComplete({ url: URL });
  return (
    <div id="container">
      <div id="input-wrapper">
        <input
          id="auto_complete_input"
          value={searchText}
          onChange={onSearch}
          placeholder="Search countries..."
        />
        {!!searchText.length && (
          <span id="clear-text" onClick={onClear}>
            X
          </span>
        )}
      </div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        !!suggestions.length && (
          <div id="suggestions">
            {suggestions.map((suggestion: string) => {
              return (
                <span
                  id="suggestion"
                  onClick={() => onSuggestionClick(suggestion)}
                  dangerouslySetInnerHTML={{ __html: suggestion }}
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
}
