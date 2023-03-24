import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import StartStateCanvas from './StartStateCanvas.jsx';
import Line from './Line.jsx';
import OperatorsBlock from './OperatorsBlock';
import DigitsBlock from './DigitsBlock';
import EqualButton from './EqualButton';
import { DroppedInput, DroppedComponent } from './DroppedParts.jsx';
import { deleteParts } from '../slices/dropPartsStatus.js';

const Item = ({ id, onClick }) => {
  const components = [OperatorsBlock, DigitsBlock, EqualButton];

  return (
    id === 1
      ? <DroppedInput onClick={onClick} />
      : <DroppedComponent id={id} Component={components[id - 2]} onClick={onClick} />
  );
};

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
    <div ref={dropRef} className="d-flex flex-column canvas">
      {startDrop && dragging ? <Line /> : ''}
      {startDrop
        ? currentParts.map(({ id, dropped, deleted }) => {
          if (dropped && !deleted) {
            return (
              <Item
                id={id}
                key={id}
                onClick={(e) => handleDoubleClick(e, id)}
              />
            );
          }
          return '';
        })
        : <StartStateCanvas /> }
    </div>
  );
};

export default Canvas;
