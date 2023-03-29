import { useSelector } from 'react-redux';

import BaseComponent from './BaseComponent.jsx';
import Input from './Input.jsx';
import OperatorsBlock from './OperatorsBlock.jsx';
import DigitsBlock from './DigitsBlock.jsx';
import EqualButton from './EqualButton.jsx';
import DraggedComponentStyle from '../styles/styled-components.js';
import handleMouseDown from '../utils/utils.js';

const Constructor = () => {
  const { calculatorStatus } = useSelector((state) => state.calculator);

  const ids = [1, 2, 3, 4];
  const components = [Input, OperatorsBlock, DigitsBlock, EqualButton];

  return (
    <div className="calc-elements d-flex flex-column">
      {!calculatorStatus
        ? ids.map((id) => (
          <BaseComponent
            id={id}
            key={id}
            styledFunction={DraggedComponentStyle}
            Component={components[id - 1]}
            onMouseDown={handleMouseDown}
          />
        ))
        : ''}
    </div>
  );
};

export default Constructor;
