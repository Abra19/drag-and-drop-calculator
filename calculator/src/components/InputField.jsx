import { useDrag } from 'react-dnd';

const InputField = ({ id }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'parts',
    item: { id, name: 'inputField' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 1 : 1;
  return (
    <input
      ref={dragRef}
      style={{ opacity }}
      type="text"
      value="0"
      className="inputField border-4 mb-12"
      readOnly={Boolean(true)}
    />
  );
};

export default InputField;
