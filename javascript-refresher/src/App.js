import logo from './logo.svg';
import './App.css';
import Home from  './components/Home';
import Navbar from './components/Navbar';
import LogInForm from './components/LogInForm';


function App() {
  return (
    <div>
      <Home />
      <Navbar homeText="Home"/>
      <LogInForm/>
    </div> 
  );
}

export default App;
