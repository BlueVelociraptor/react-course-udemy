import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const useCounter = ({ initialValue = 10 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = (): void => {
    setCounter((value) => value + 1);
  };

  const handleSubtract = (): void => {
    setCounter((value) => value - 1);
  };

  const handleReset = (): void => {
    setCounter(initialValue);
  };

  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
