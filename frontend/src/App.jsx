import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.jsx';
import { LoginSignup } from './Pages/LoginSignup.jsx';
import { Navbar } from './Components/NavBar/NavBar.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import EventsList from './Components/EventsList/EventsList.jsx';
import Account from './Pages/Account.jsx';
import Event from './Pages/Event.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<LoginSignup/>}/>
          <Route path = "/account" element = {<Account/>}/>
          <Route path = "/allevents" element = {<EventsList/>}/>
          <Route path = "/event" element = {<Event/>}>
            <Route path = ":eventId" element = {<Event/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>

  )
}

export default App;
