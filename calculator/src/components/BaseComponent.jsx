import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeStartStatus, changeDropPartStatus, changeDraggingStatus } from '../slices/dropPartsStatus.js';

const BaseComponent = ({ id, styledFunction, Component }) => {
  const { currentParts } = useSelector((state) => state.dropParts);

  const dispatch = useDispatch();

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
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(changeStartStatus(dropResult));
        dispatch(changeDropPartStatus(id));
        dispatch(changeDraggingStatus(false));
      }
    },
  }));

  const { dropped } = currentParts.find((el) => el.id === id);

  return (
    <div
      ref={dragRef}
      style={styledFunction(dropped, isDragging)}
      className="mb-12"
    >
      <Component />
    </div>
  );
};

export default BaseComponent;
