import React, { useState, useEffect } from "react";
import wordsData from "../words_dictionary.json";

const Typeahead = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [totalMatches, setTotalMatches] = useState(0);

  useEffect(() => {
    if (input) {
      const lowerCaseInput = input.toLowerCase();
      const matches = Object.keys(wordsData).filter((word) =>
        word.startsWith(lowerCaseInput)
      );
      setTotalMatches(matches.length);
      setSuggestions(matches.slice(0, 4));
    } else {
      setSuggestions([]);
      setTotalMatches(0);
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
      {totalMatches > 4 && <p>More matches: {totalMatches - 4}</p>}
    </div>
  );
};

export default Typeahead;
