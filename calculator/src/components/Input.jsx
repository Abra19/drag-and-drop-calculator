const Input = ({ name, onClick, onMouseDown }) => (
  <input
    type="text"
    value="0"
    className={name}
    onClick={onClick}
    onMouseDown={onMouseDown}
    readOnly={Boolean(true)}
  />
);

export default Input;
