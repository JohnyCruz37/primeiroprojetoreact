
import { Outlet } from 'react-router-dom'
import Navegador from './componentes/navegador'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navegador/>
      <Outlet />
    </div>
  );
}

export default App
