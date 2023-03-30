import { useSelector } from 'react-redux';

const Input = ({ name, onClick, onMouseDown }) => {
  const { inputValue } = useSelector((state) => state.calculator);

  // eslint-disable-next-line functional/no-let
  let fontSize = '34px';
  const len = inputValue.toString().length;
  if (len > 10 && len <= 15) {
    fontSize = '24px';
  } else if (len > 15) {
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
