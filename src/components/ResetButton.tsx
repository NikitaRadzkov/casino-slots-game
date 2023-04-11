import { FC } from 'react';

interface ResetButton {
  resetGame: () => void;
}

const ResetButton: FC<ResetButton> = ({ resetGame }) => {
  return <button onClick={resetGame}>Reset</button>;
};

export default ResetButton;
