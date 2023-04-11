import { FC } from 'react';

interface SlotProps {
  symbol: string;
}

const Slot: FC<SlotProps> = ({ symbol }) => {
  return <div>{symbol}</div>;
};

export default Slot;
