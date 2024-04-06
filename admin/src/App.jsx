import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { Admin } from './Pages/Admin/Admin';


export const App = () => {
  return (
    <div>
      <NavBar />
      <Admin />
    </div>
  )
}

export default App;