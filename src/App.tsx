import { useState } from 'react';
import './App.css';
import Slot from './components/Slot';
import PlayButton from './components/PlayButton';
import ResetButton from './components/ResetButton';
import WinChecker from './components/WinChecker';

function App() {
  const [symbols, setSymbols] = useState(['', '', '']);
  const [bet, setBet] = useState(1);

  const playGame = () => {
    const newSymbols = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
    const stringSymbols = newSymbols.map(el => String(el));
    setSymbols(stringSymbols);
  };

  const resetGame = () => {
    setSymbols(['', '', '']);
  };

  const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBet(Number(e.target.value));
  };

  return (
    <div className="app">
      <h1 className="title">Slot Machine</h1>
      <div className="slots-container">
        <Slot symbol={symbols[0]} />
        <Slot symbol={symbols[1]} />
        <Slot symbol={symbols[2]} />
      </div>
      <div className="bet-container">
        <label>Bet:</label>
        <input type="number" value={bet} onChange={handleBetChange} />
      </div>
      <div className="button-container">
        <PlayButton playGame={playGame} />
        <ResetButton resetGame={resetGame} />
      </div>
      <WinChecker symbols={symbols} />
    </div>
  );
}

export default App;
