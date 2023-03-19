import Operators from './Operatos';
import InputField from './InputField';
import Digits from './Digits';
import EqualButton from './EqualButton';

const Constructor = () => (
  <div className="calc-elements d-flex flex-column">
    <InputField />
    <Operators />
    <Digits />
    <EqualButton />
  </div>
);

export default Constructor;
