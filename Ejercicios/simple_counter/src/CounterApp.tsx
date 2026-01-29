import { useCounter } from "./hooks/useCounter";

interface Props {
  initialValue?: number;
}

export const CounterApp = ({ initialValue = 10 }: Props) => {
  const { counterValue, handleAdd, handleReset, handleSubtract } = useCounter({
    initialValue,
  });

  return (
    <>
      <h1>Counter App Sencillo</h1>

      <h2>Total: {counterValue}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reiniciar</button>
    </>
  );
};
