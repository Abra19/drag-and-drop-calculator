import { useSelector } from 'react-redux';

const Input = ({ name, onClick, onMouseDown }) => {
  const { startValue, currentResult } = useSelector((state) => state.calculator);

  console.log(currentResult);

  // eslint-disable-next-line functional/no-let
  let fontSize = '34px';
  if (currentResult.length > 10 && currentResult.length <= 15) {
    fontSize = '24px';
  } else if (currentResult.length > 15) {
    fontSize = '19px';
  }
  console.log(fontSize);

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
