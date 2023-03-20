import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeStartStatus, changeDropPartStatus } from '../slices/dropPartsStatus.js';
import { InputStyle } from '../styles/styled-components.js';
import Input from './Input.jsx';

const InputField = ({ id }) => {
  const { currentParts } = useSelector((state) => state.dropParts);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'parts',
    item: { id },
    collect: (monitor) => {
      const dragResult = monitor.isDragging();

      return ({
        isDragging: dragResult,
      });
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(changeStartStatus(true));
        dispatch(changeDropPartStatus(id));
      }
    },
  }));

  const { dropped } = currentParts.find((el) => el.id === id);

  return (
    <div
      ref={dragRef}
      style={InputStyle(dropped, isDragging)}
      className="mb-12"
    >
      <Input />
    </div>
  );
};

export default InputField;
