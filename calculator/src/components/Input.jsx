import { useSelector } from 'react-redux';

const Input = ({ name, onClick, onMouseDown }) => {
  const { startValue } = useSelector((state) => state.calculator);

  // eslint-disable-next-line functional/no-let
  let fontSize = '34px';
  if (startValue.length > 10 && startValue.length <= 15) {
    fontSize = '24px';
  } else if (startValue.length > 15) {
    fontSize = '19px';
  }

  return (
    <input
      type="text"
      value={startValue}
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
