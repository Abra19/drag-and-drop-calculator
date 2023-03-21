import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import Image from 'react-bootstrap/Image';

import elements from '../dragUtils/utils.js';
import StartStateCanvas from './StartStateCanvas.jsx';
import image from '../assets/images/figures/line.svg';

const Line = () => (
  <Image
    width={250}
    height={6}
    alt="line"
    src={image}
    style={{
      position: 'absolute',
      top: '60px',
      left: '0',
      zIndex: '100',
    }}
  />
);

const Canvas = () => {
  const { startDrop, currentParts, dragging } = useSelector((state) => state.dropParts);

  const [, dropRef] = useDrop({
    accept: 'parts',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  console.log(currentParts);

  return (
    <div ref={dropRef} className="d-flex flex-column canvas">
      {startDrop && dragging ? <Line /> : ''}
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
