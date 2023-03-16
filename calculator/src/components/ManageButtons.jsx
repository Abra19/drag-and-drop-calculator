import {
  Button,
} from 'react-bootstrap';

const ManageButtons = () => (
  <div className="manage border-1 mb-28">
    <Button className="runtime position-relative base-text text-black p-button" disabled>Runtime</Button>
    <Button className="constructor position-relative base-text text-black border-1 p-button">Constructor</Button>
  </div>
);

export default ManageButtons;
