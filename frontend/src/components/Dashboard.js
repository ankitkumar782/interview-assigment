import { useState } from "react";

export default function Dashboard (){
 const [input, setInput] = useState('');
  const [entries, setEntries] = useState([]);

  const isMalicious = () => Math.random() > 0.7; // 30% chance of being "Malicious"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newEntry = {
      id: Date.now(),
      value: input.trim(),
      threatScore: isMalicious() ? 'Malicious' : 'Safe',
    };

    setEntries([newEntry, ...entries]);
    setInput('');


    
  };

  return (
    <div className="container">
      <h1 className="title">Threat Dashboard</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter IP or URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Submit</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>IP / URL</th>
            <th>Threat Score</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.value}</td>
              <td className={entry.threatScore === 'Malicious' ? 'malicious' : 'safe'}>
                {entry.threatScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

