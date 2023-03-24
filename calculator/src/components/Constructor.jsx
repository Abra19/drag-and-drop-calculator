import BaseComponent from './BaseComponent';
import Input from './Input.jsx';
import OperatorsBlock from './OperatorsBlock';
import DigitsBlock from './DigitsBlock';
import EqualButton from './EqualButton';
import DraggedComponentStyle from '../styles/styled-components';
import handleMouseDown from '../utils';

const Constructor = () => {
  const ids = [1, 2, 3, 4];
  const components = [Input, OperatorsBlock, DigitsBlock, EqualButton];

  return (
    <div className="calc-elements d-flex flex-column">
      {ids.map((id) => (
        <BaseComponent
          id={id}
          key={id}
          styledFunction={DraggedComponentStyle}
          Component={components[id - 1]}
          onMouseDown={handleMouseDown}
        />
      ))}
    </div>
  );
};

export default Constructor;
