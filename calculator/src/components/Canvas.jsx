import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import elements from '../dragUtils/utils.js';
import StartStateCanvas from './StartStateCanvas.jsx';

const Line = () => (
  <div>
    <hr
      style={{
        background: 'lime',
        color: 'lime',
        borderColor: 'lime',
        height: '3px',
      }}
    />
  </div>
);

const Canvas = () => {
  const { startDrop, currentParts, dragging } = useSelector((state) => state.dropParts);

  const [, dropRef] = useDrop({
    accept: 'parts',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef} className="d-flex flex-column canvas">
      {dragging ? <Line /> : ''}
      {startDrop
        ? currentParts.map(({ id, dropped }) => {
          if (dropped) {
            const item = elements.find((el) => el.id === id);
            return (
              <div className="mb-11" key={id}>
                {item.component }
              </div>
            );
          }
          return '';
        })
        : <StartStateCanvas /> }
    </div>
  );
};

export default Canvas;
