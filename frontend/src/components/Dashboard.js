import { useState } from "react";
import { addlist } from "../api/api";


export default function Dashboard() {
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newEntry = {

      url: input.trim(),

    };
    console.log(newEntry)


    // setInput('');

    const res = await addlist(newEntry)
    setEntries(res.data);
    // console.log(entries)



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
            <tr key={entry._id}>
              <td>{entry.url}</td>
              <td style={{
                color: entry.threat === 'notsafe' ? 'red' : 'green',
                fontWeight: 'bold',
              }}>
                {entry.threat}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

