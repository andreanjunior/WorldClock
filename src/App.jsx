import { useState, useEffect } from 'react';
import TimeZoneClock from './components/TimeZoneClock';

function App() {
  const fusoHorarios = [
    'UTC',
    'GMT',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokyo',
  ];

  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusosHorariosSelecionados.includes(novoFuso)) {
      setFusosHorariosSelecionados([...fusosHorariosSelecionados, novoFuso]);
    }
  };

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);
  console.log(fusoHorarioLocal);
  return (
    <div>
      <h1>Relogio Mundial</h1>
      <select onChange={(e) => adicionarFusoHorario(e)}>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {fusoHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>
    </div>
  );
}

export default App;
