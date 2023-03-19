import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { changeDropStatus } from '../slices/dropStatus.js';
import { InputStyle } from '../styles/styled-components.js';

export const Input = () => (
  <input
    type="text"
    value="0"
    className="inputField "
    readOnly={Boolean(true)}
  />
);

const InputField = () => {
  const { isDropped } = useSelector((state) => state.drop);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'parts',
    item: { name: 'inputField' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(changeDropStatus(true));
      }
    },
  }));

  console.log(isDragging, 'drag');

  return (
    <div
      ref={dragRef}
      className="inputWrapper mb-12"
      style={InputStyle(isDropped)}
    >
      <Input />
    </div>
  );
};

export default InputField;
