import { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

export function SecondPage({ data, onChange }) {
  const [descriptions, setDescriptions] = useState(data.descriptions || "");
  const [skills, setSkills] = useState(data.skills || []);

  const navigation = useNavigate()

  const skillsMock = ["JS", "TS", "React", "Redux"];

  const onRedirect = () => {

    onChange({ descriptions, skills });
    navigation("/third");
  };
  return (
    <>
      <h1>Second Screen</h1>
      <input
        value={descriptions}
        onChange={(e) => setDescriptions(e.target.value)}
      />
      <ul>
        {skillsMock.map((skill) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setSkills([...skills, skill])}
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
      <button onClick={onRedirect}>Next</button>
    </>
  );
}
