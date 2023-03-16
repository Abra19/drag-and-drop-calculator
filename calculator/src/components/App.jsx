import React, { } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Constructor from './Constructor';
import Runtime from './Runtime';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="body d-flex">
      <Constructor />
      <Runtime />
    </div>
  </DndProvider>
);

export default App;
