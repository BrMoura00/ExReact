import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'

function Media() {  
  const [count, setCount] = useState(0);

  return (
      <>
        <Menu/>
      <h1>Media</h1>
    </>
  );
}

export default Media;
