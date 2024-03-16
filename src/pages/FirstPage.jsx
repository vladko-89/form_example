import { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

export function FirstPage({ data, onChange }) {
  const [name, setName] = useState(data.name || "");
  const navigation = useNavigate()

  const onRedirect = () => {
    onChange({ name });
    navigation("/second");
  }

  return (
    <div className="App">
      <h1>First Screen</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onRedirect}>Next</button>
    </div>
  );
}
