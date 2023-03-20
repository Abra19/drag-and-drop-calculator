import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeDropPartStatus, changeDragPartStatus, addPart } from '../slices/dropPartsStatus';
import { OperatorComponent } from '../styles/styled-components.js';
import OperatorsBlock from './OperatorsBlock';

const Operators = ({ id }) => {
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
      if (item && dropResult) {
        dispatch(changeDropPartStatus(item && dropResult));
        dispatch(addPart(id));
      }
    },
  }));

  return (
    <div
      ref={dragRef}
      style={OperatorComponent(dropped, isDragging)}
      className="mb-12"
    >
      <OperatorsBlock />
    </div>
  );
};

export default Operators;
