const FeedbackInput = ({ label, type, name, value, onChange, min, max }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={onChange} />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
    </div>
  );
};

export default FeedbackInput;
