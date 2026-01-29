import { useState } from "react";

interface Props {
  initialValue: number;
}

export const useCounter = ({ initialValue }: Props) => {
  const [counterValue, setCounterValue] = useState(initialValue);

  const handleAdd = () => {
    setCounterValue((previousValue) => previousValue + 1);
  };

  const handleSubtract = () => {
    setCounterValue((previousValue) => previousValue - 1);
  };

  const handleReset = () => {
    setCounterValue(initialValue);
  };

  return {
    counterValue,
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
