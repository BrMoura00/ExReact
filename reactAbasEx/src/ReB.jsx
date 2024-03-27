import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'

function ReB() {  
  const [count, setCount] = useState(0);

  return (
      <>
        <Menu/>
      <h1>Rick and Morty</h1>
    </>
  );
}

export default ReB;
