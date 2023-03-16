import Operators from './Operatos';
import InputField from './InputField';
import Digits from './Digits';
import EqualButton from './EqualButton';

const Constructor = () => {
  const ids = [1, 2, 3, 4];

  return (
    <div className="calc-elements d-flex flex-column">
      <InputField id={ids[0]} />
      <Operators id={ids[1]} />
      <Digits id={ids[2]} />
      <EqualButton id={ids[3]} />
    </div>
  );
};

export default Constructor;
