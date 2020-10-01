import React from 'react';
import Board from './components/Board';
import Scores from './components/Scores';
import AppContextProvider from './contexts/appContext';

function App() {
  return (
    <div className="App">
        <AppContextProvider>
          <Board />
          <Scores />
        </AppContextProvider>
    </div>
  );
}

export default App;
