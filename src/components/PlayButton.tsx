import { FC } from 'react';

interface PlayButtonProps {
  playGame: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({ playGame }) => {
  return <button onClick={playGame}>Play</button>;
};

export default PlayButton;
