import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeDraggingStatus, swapParts } from '../slices/dropPartsStatus.js';

const DroppedComponent = ({ id, Component, onClick }) => {
  const { calculatorStatus } = useSelector((state) => state.calculator);

  const dispatch = useDispatch();
  const [{ isDragging }, dragR] = useDrag({
    type: 'item',
    item: { id },
    collect: (monitor) => {
      const dragResult = monitor.isDragging();
      if (dragResult) {
        dispatch(changeDraggingStatus(true));
      }
      return {
        isDragging: dragResult,
      };
    },
    canDrag: () => !calculatorStatus,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(changeDraggingStatus(false));
      }
    },
  });

  const ref = useRef(null);

  const [, dropR] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragId = item.id;
      const hoverId = id;
      if (dragId === hoverId) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverActualY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of item
      // When dragging downwards, only move, when the cursor is below 50%
      if (dragId < hoverId && hoverActualY < hoverMiddleY) {
        return;
      }
      // When dragging upwards, only move when the cursor is above 50%
      if (dragId > hoverId && hoverActualY > hoverMiddleY) {
        return;
      }

      dispatch(swapParts({ dragId, hoverId }));

      // eslint-disable-next-line no-param-reassign
      item.id = hoverId;
    },
  });

  const dragDrop = dragR(dropR(ref));
  const name = calculatorStatus ? 'droppedElements' : '';

  return (
    <div
      ref={dragDrop}
      className="mb-12"
      role="button"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={onClick}
    >
      <Component
        name={name}
        style={{
          border: 'none',
          cursor: calculatorStatus ? 'default' : 'move',
        }}
      />
    </div>
  );
};

export default DroppedComponent;
