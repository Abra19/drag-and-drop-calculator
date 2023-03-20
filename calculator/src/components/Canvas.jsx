import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import elements from '../dragUtils/utils.js';
import StartStateCanvas from './StartStateCanvas.jsx';

const Canvas = () => {
  const { startDrop, currentParts } = useSelector((state) => state.dropParts);

  const [, dropRef] = useDrop({
    accept: 'parts',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className="d-flex flex-column">
      {startDrop
        ? currentParts.map(({ id, dropped }) => {
          if (dropped) {
            const item = elements.find((el) => el.id === id);
            return item.component;
          }
          return '';
        })
        : <StartStateCanvas /> }
    </div>
  );
};

export default Canvas;
