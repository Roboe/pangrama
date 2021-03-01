const TextField = ({ id, defaultValue, handleChange, label, ...props }) => (
  <div className="pc-text-field">
    <input
      type="text"
      id={id}
      className="pc-text-field--input"
      defaultValue={defaultValue}
      onChange={handleChange}
      {...props}
    />
    <label htmlFor={id} className="pc-text-field--label">
      {label}
    </label>
  </div>
)

export default TextField
