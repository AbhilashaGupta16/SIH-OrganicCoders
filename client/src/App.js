import './App.css';
import SoumNavBar from './components/SoumNavBar';
import SoumFooter from './components/SoumFooter';
// import Navbar from './components/Navbar';
import { Routes, Route , Navigate} from 'react-router-dom'
import Home from './components/Home';
import SoumTheme from './components/SoumTheme';
import SoumAllLogins from './components/SoumAllLogins';
const App = () => {
  return (
    <>
      <SoumNavBar/>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/SoumTheme" element ={<SoumTheme/>}/>
        <Route exact path="/SoumLogins" element ={<SoumAllLogins/>}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      <SoumFooter/>
    </>
  )
}

export default App
