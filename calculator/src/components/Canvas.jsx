import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import elements from '../dragUtils/utils.js';
import StartStateCanvas from './StartStateCanvas.jsx';
import Line from './Line.jsx';
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

  const handleDoubleClick = (e, id) => {
    e.preventDefault();
    if (e.detail === 2) {
      dispatch(deleteParts(id));
    }
  };

  const handleMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  return (
    <div ref={dropRef} className="d-flex flex-column canvas">
      {startDrop && dragging ? <Line /> : ''}
      {startDrop
        ? currentParts.map(({ id, dropped, deleted }) => {
          if (dropped && !deleted) {
            const item = elements.find((el) => el.id === id);
            return (
              <div className="mb-12" key={id}>
                <div role="button" onClick={(e) => handleDoubleClick(e, id)} onMouseDown={(e) => handleMouseDown(e)}>
                  {item.component }
                </div>
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
