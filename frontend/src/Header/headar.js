import CategoriesMenu from "./Categories-Menü";
import Top from "./Header-Top";
import Logo from "./Logo";
import Menu from "./Menu";
import HeadButton from "./Header-Button";

function Header(){

return (
<header className="header-container">
<CategoriesMenu/>
<Top/>
<Logo/>
<Menu/>
<HeadButton/>

</header>

)


}

export default Header;