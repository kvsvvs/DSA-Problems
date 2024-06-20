import React, { useState } from "react";

const PollWidget = () => {
  const initialPollData = [
    { id: 1, option: "Option 1", votes: 0 },
    { id: 2, option: "Option 2", votes: 0 },
    { id: 3, option: "Option 3", votes: 0 },
  ];

  const [pollOptions, setPollOptions] = useState(initialPollData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollFinished, setPollFinished] = useState(false);

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmitVote = () => {
    if (selectedOption !== null) {
      const updatedOptions = pollOptions.map((option) => {
        if (option.id === selectedOption) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });
      setPollOptions(updatedOptions);
      setSelectedOption(null);
    }
  };

  const finishPoll = () => {
    setPollFinished(true);
  };

  const totalVotes = pollOptions.reduce((acc, option) => acc + option.votes, 0);

  return (
    <div>
      <h1>Poll Widget</h1>
      {!pollFinished ? (
        <>
          {pollOptions.map((option) => (
            <div key={option.id}>
              <button
                onClick={() => handleSelectOption(option.id)}
                disabled={selectedOption === option.id}
              >
                {option.option}
              </button>
            </div>
          ))}
          <button onClick={handleSubmitVote} disabled={!selectedOption}>
            Submit Vote
          </button>
          <button onClick={finishPoll}>Finish Poll</button>
        </>
      ) : (
        <>
          <h2>Poll Results</h2>
          {pollOptions.map((option) => (
            <div key={option.id}>
              {option.option}: {((option.votes / totalVotes) * 100).toFixed(1)}%
              ({option.votes} votes)
            </div>
          ))}
          <p>Total votes: {totalVotes}</p>
        </>
      )}
    </div>
  );
};

export default PollWidget;
