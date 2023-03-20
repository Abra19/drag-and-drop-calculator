import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeDragPartStatus, changeDropPartStatus, addPart } from '../slices/dropPartsStatus.js';
import { InputStyle } from '../styles/styled-components.js';
import Input from './Input.jsx';

const InputField = ({ id }) => {
  const { dropped } = useSelector((state) => state.dropParts);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'parts',
    item: { id },
    collect: (monitor) => {
      const dragResult = monitor.isDragging();
      if (dragResult) {
        dispatch(changeDragPartStatus(dragResult));
      }
      return ({
        isDragging: dragResult,
      });
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      if (item && dropResult) {
        dispatch(changeDropPartStatus(item && dropResult));
        dispatch(addPart(id));
      }
    },
  }));

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
