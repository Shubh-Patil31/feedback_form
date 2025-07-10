const FeedbackPreview = ({ feedback }) => {
  return (
    <div className="feedback-preview">
      <h3>Preview:</h3>
      <p>
        <strong>Name:</strong> {feedback.name || "Not provided"}
      </p>
      <p>
        <strong>Feedback Message:</strong> {feedback.message || "Not provided"}
      </p>
      <p>
        <strong>Rating:</strong> {feedback.rating}/10
      </p>
    </div>
  );
};

export default FeedbackPreview;
