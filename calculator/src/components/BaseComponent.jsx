import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeStartStatus, addParts, changeDraggingStatus } from '../slices/dropPartsStatus.js';

const BaseComponent = ({ id, styledFunction, Component }) => {
  const { currentParts } = useSelector((state) => state.dropParts);

  const dispatch = useDispatch();
  const found = currentParts.find((el) => el.id === id);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'parts',
    item: { id },
    collect: (monitor) => {
      const dragResult = monitor.isDragging();
      if (dragResult) {
        dispatch(changeDraggingStatus(true));
      }
      return ({
        isDragging: dragResult,
      });
    },
    canDrag: () => (found ? !found.dropped : true),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(changeStartStatus(dropResult));
        dispatch(addParts(id));
        dispatch(changeDraggingStatus(false));
      }
    },
  }), [currentParts]);

  const dropped = found ? found.dropped : false;
  const nameInput = dropped ? 'inputFieldDropped' : 'inputField';
  const nameOthers = dropped ? 'droppedElements' : '';
  const names = [`${nameInput}`, `${nameOthers}`, `${nameOthers}`, `${nameOthers}`];

  return (
    <div
      ref={dragRef}
      style={styledFunction(dropped, isDragging)}
      className="mb-12"
    >
      <Component name={names[id - 1]} />
    </div>
  );
};

export default BaseComponent;
