import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import StartStateCanvas from './StartStateCanvas.jsx';
import Line from './Line.jsx';
import DroppedItem from './DroppedItem.jsx';
import { deleteParts } from '../slices/dropPartsStatus.js';

const Canvas = () => {
  const { startDrop, currentParts, dragging } = useSelector((state) => state.dropParts);

  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: 'parts',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDoubleClick = (e, identificator) => {
    e.preventDefault();
    if (e.detail === 2) {
      dispatch(deleteParts(identificator));
    }
  };

  return (
    <div ref={dropRef} className="d-flex flex-column canvasWrap">
      {startDrop
        ? currentParts.map(({ id, dropped, deleted }) => {
          if (dropped && !deleted) {
            return (
              <DroppedItem
                id={id}
                key={id}
                onClick={(e) => handleDoubleClick(e, id)}
              />
            );
          }
          return '';
        })
        : <StartStateCanvas /> }
      { startDrop && dragging ? <Line /> : ''}
    </div>
  );
};

export default Canvas;
