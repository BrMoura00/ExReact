import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'

function Media() {
  const [notas, setNotas] = useState(Array(5).fill(0));
  const [media, setMedia] = useState(0);

  const calcularMedia = () => {
    const soma = notas.reduce((acc, curr) => acc + parseFloat(curr), 0);
    setMedia(soma / notas.length);
  };

  return (
    <>
      <Menu/>
        <div>
        {notas.map((nota, index) => (
        <input
          key={index}
          type="number"
          value={nota}
          onChange={(e) => {
            const newNotas = [...notas];
            newNotas[index] = e.target.value;
            setNotas(newNotas);
          }}
        />
      ))}
      <button onClick={calcularMedia}>Calcular Média</button>
      <div>Média: {media}</div>
    </div>
    </>
  )
}

export default Media;
