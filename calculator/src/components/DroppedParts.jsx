import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

import Input from './Input';
import { swapParts } from '../slices/dropPartsStatus.js';
import handleMouseDown from '../utils.js';

export const DroppedInput = ({ onClick }) => (
  <Input
    name="droppedInput mb-12"
    onClick={onClick}
    onMouseDown={(e) => handleMouseDown(e)}
  />
);

export const DroppedComponent = ({ id, Component, onClick }) => {
  const dispatch = useDispatch();
  const [, dragR] = useDrag({
    type: 'item',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
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

  return (
    <div
      ref={dragDrop}
      className="mb-12"
      role="button"
      onClick={onClick}
    >
      <Component />
    </div>
  );
};
