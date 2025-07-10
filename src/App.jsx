import { useState } from "react";
import FeedbackInput from "./component/FeedbackInput";
import FeedbackPreview from "./component/FeedbackPreview";

const App = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFeedback({
      name: "",
      message: "",
      rating: 5,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted feedback:", feedback);
    alert("Thank you for your feedback!");
    handleReset();
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <FeedbackInput
          label="Name:"
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
        />

        <FeedbackInput
          label="Feedback Message:"
          type="textarea"
          name="message"
          value={feedback.message}
          onChange={handleChange}
        />

        <FeedbackInput
          label="Rating (1-10):"
          type="number"
          name="rating"
          min="1"
          max="10"
          value={feedback.rating}
          onChange={handleChange}
        />

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Clear Form
          </button>
        </div>
      </form>

      <FeedbackPreview feedback={feedback} />
    </div>
  );
};

export default App;
