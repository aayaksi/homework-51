import { useState } from "react";

export function Lottery() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const min = 5;
    const max = 36;
    const total = 6; 

    const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const shuffled = range.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, total).sort((a, b) => a - b);

    setNumbers(selected);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button
        onClick={generateNumbers}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        New numbers
      </button>

      {numbers.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h2>Набор чисел:</h2>
          <div style={{ fontSize: "20px" }}>{numbers.join(", ")}</div>
        </div>
      )}
    </div>
  );
}
