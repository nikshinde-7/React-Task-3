import './App.css';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/Signup';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className="container bg-gradient">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard isDashboard={true} />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
