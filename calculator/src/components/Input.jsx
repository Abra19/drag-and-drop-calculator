const Input = ({ name, onClick, onMouseDown }) => {
  const value = 0;
  return (
    <input
      type="text"
      value={value}
      className={name}
      onClick={onClick}
      onMouseDown={onMouseDown}
      readOnly
    />
  );
};

export default Input;
