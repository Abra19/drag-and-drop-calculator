import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Constructor from './Constructor.jsx';
import Runtime from './Runtime.jsx';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="body d-flex">
      <Constructor />
      <Runtime />
    </div>
  </DndProvider>
);

export default App;
