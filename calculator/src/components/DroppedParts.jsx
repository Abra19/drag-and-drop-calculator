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
    canDrag: () => true,
  });

  const ref = useRef(null);

  const [, dropR] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index;
      console.log(dragIndex);
      const hoverIndex = id - 1;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) {
        return;
      }
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) {
        return;
      }

      dispatch(swapParts({ dragIndex, hoverIndex }));

      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
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
