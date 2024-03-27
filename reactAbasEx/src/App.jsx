import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container-father'>

        <div className='container-one'>
          <h1>Vite</h1>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>Vite Legal</p>
        </div>
      
        <div className='container-two'>
          <h1>React</h1>
          <img src={reactLogo} className="logo" alt="React logo" />
          <p>React Legal</p>
        </div>

        <div className='container-tree'>
          <h1>Axios</h1>
          <img src="../public/imgs/axios_logo.png" className='logo-axios' alt="Axios logo" />
          <p>Axios top de linha</p>
        </div>

        <div className='container-four'>
          <h1> REACT ROUTER</h1>
          <img src="../public/imgs/react-router.png" className='logo-router' alt="Router logo" />
          <p>REACT ROUTER top</p>
        </div>

        <div className='container-five'>
          <h1>Npm</h1>
          <img src="../public/imgs/npm_logo.png" className='logo-npm' alt="Npm logo" />
          <p>Npm top de linha</p>
        </div>

        <div className='container-six'>
          <h1>Node</h1>
          <img src="../public/imgs/node_logopng.png"  className='logo-node' alt="Node logo" />
          <p>Node daora meu</p>
        </div>

      </div>
      
      
    </>
  );
}

export default App;
