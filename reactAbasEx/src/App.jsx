import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='title-container'>
        <h1>Vite</h1>
        <h1>React</h1>
        <h1>Axios</h1>
        <h1>React Router DOM</h1>
        <h1>Npm</h1>
        <h1>NODE.js</h1>
        
      </div>
      
      <div className='logo-container'>
        
        <img src={viteLogo} className="logo" alt="Vite logo" />
      
        <img src={reactLogo} className="logo react" alt="React logo" />
      
        <img src="../public/imgs/axios_logo.png"  className="logo-axios"alt="axiosLogo"/>
      
        <img src="../public/imgs/react-router.png" className="logo-router" alt="routerLogo"/>
      
        <img src="../public/imgs/npm_logo.png" className='logo-npm' alt="npmLogo" />

        <img src="../public/imgs/node_logopng.png" className='logo-node' alt="nodeLogo" />
      </div>
      
    </>
  );
}

export default App;
