import { useSelector } from 'react-redux';

const Input = ({ name, onClick, onMouseDown }) => {
  const { inputValue } = useSelector((state) => state.calculator);

  // eslint-disable-next-line functional/no-let
  let fontSize = '34px';
  if (inputValue.length > 10 && inputValue.length <= 15) {
    fontSize = '24px';
  } else if (inputValue.length > 15) {
    fontSize = '19px';
  }

  return (
    <input
      type="text"
      value={inputValue}
      style={{
        fontSize,
      }}
      className={name}
      onClick={onClick}
      onMouseDown={onMouseDown}
      readOnly
    />
  );
};

export default Input;
