import logo from './logo.png';
import './App.css';
import Menu from './Header/Menu';
import Top from './Header/Header-Top';

function App() {
  return (
    <div className="trend">
      <header className="trend-header">
      <img src={logo} className="trend-logo" alt="logo" />


      

        <Top></Top>
      <Menu></Menu>
  
       
      </header>
    </div>
  );
}

export default App;
