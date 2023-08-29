export const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  const nameOfBtns = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {options.map((option, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {nameOfBtns[option]}
          </button>
        ))}
      </div>
    </div>
  );
};
