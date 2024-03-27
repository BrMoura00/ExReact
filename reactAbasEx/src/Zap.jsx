import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'

function Zap() {  
  const [count, setCount] = useState(0);

  return (
      <>
        <Menu/>
      <h1>Zap</h1>
    </>
  );
}

export default Zap;
