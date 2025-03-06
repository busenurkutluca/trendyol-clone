import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './Header/Menu';
import Top from './Header/Header-Top';
import Logo from './Header/Logo';
import Example from './Header/Categories-Menü';
import CategoriesMenu from './Header/Categories-Menü';

function App() {
  return (
    <div className="trend">
      <header className="trend-header">
     


      
        <Logo></Logo> <CategoriesMenu></CategoriesMenu>
        <Top></Top>
       
      <Menu></Menu>
      
  
       
      </header>
    </div>
  );
}

export default App;
