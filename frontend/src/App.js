import logo from './logo.png';
import './App.css';
import Menu from './Menu';
import Top from './Header/Header-Top';

function App() {
  return (
    <div className="trend">
      <header className="trend-header">
        <img src={logo} className="trend-logo" alt="logo" />
        
        
      <Menu></Menu>
      <Top></Top>
       
      </header>
    </div>
  );
}

export default App;
