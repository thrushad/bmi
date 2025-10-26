import React, { useState } from 'react';
import './App.css';
function App() {
const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [bmi, setBmi] = useState(null);
const calculateBMI = () => {
if (weight && height) {
const heightInMeters = height / 100;
const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
setBmi(bmiValue);
}
};
return (
<div className="App">
<h2>BMI Calculator</h2>
<input
type="number"
placeholder="Weight (kg)"
value={weight}
onChange={e => setWeight(e.target.value)}
/>
<input
type="number"
placeholder="Height (cm)"
value={height}
onChange={e => setHeight(e.target.value)}
/>
<button onClick={calculateBMI}>Calculate BMI</button>
{bmi && <p>Your BMI is: {bmi}</p>}
</div>
);
}
export default App;