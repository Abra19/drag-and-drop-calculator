import { useSelector } from 'react-redux';

const StartStateCanvas = () => {
  const { dragging } = useSelector((state) => state.dropParts);

  return (
    <div className="canvas border-2" style={{ background: dragging ? '#F0F9FF' : 'white' }}>
      <p className="text-center big-text mt-210 p-0 mb-2">Перетащите сюда</p>
      <p className="text-center small-text p-0">любой элемент из левой панели</p>
    </div>
  );
};

export default StartStateCanvas;
