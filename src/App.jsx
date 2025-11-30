import { useState } from "react";

export default function Dockerrr() {
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [b, setB] = useState("");

  const calcBMI = () => {
    const weight = parseFloat(w);
    const height = parseFloat(h) / 100; // convert cm → meters

    if (!weight || !height) return;

    const bmi = (weight / (height * height)).toFixed(2);
    setB(bmi);
  };

  return (
    <div>
      <input placeholder="kg" value={w} onChange={(e) => setW(e.target.value)} />
      <input placeholder="cm" value={h} onChange={(e) => setH(e.target.value)} />
      <button onClick={calcBMI}>Calc</button>

      {b && <div>BMI: {b}</div>}
    </div>
  );
}
