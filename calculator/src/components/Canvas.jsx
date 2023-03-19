import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import { Input } from './InputField.jsx';

const StartState = () => (
  <div className="canvas border-2">
    <p className="text-center big-text mt-210 p-0 mb-2">Перетащите сюда</p>
    <p className="text-center small-text p-0">любой элемент из левой панели</p>
  </div>
);

const Canvas = () => {
  const { isDropped } = useSelector((state) => state.drop);

  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: 'parts',
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });
  const isActive = canDrop && isOver;
  console.log(isActive);

  return (
    <div ref={dropRef} className="inputWrapper mb-12">
      {isDropped ? <Input /> : <StartState /> }
    </div>
  );
};

export default Canvas;
