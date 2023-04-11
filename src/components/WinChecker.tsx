import { FC } from 'react';

interface WinCheckerProps {
  symbols: string[];
}

const WinChecker: FC<WinCheckerProps> = ({ symbols }) => {
  const isWin = symbols[0] === symbols[1] && symbols[1] === symbols[2];
  return <div>{isWin ? 'You win!' : 'Try again'}</div>;
};

export default WinChecker;
