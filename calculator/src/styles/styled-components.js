const shadow = '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)';

const DraggedComponentStyle = (isDropped, isDragging) => ({
  boxShadow: isDropped ? 'none' : shadow,
  opacity: isDropped ? 0.5 : 1,
  cursor: isDragging ? 'move !important' : 'default',
});

export default DraggedComponentStyle;
