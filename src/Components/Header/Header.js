import Navtab from './Navtab';
import Cards from '../Card/Card';
import Footer from '../Footer/Footer';
import Advertisement from '../Advertisement/Advertisement';
import NavBar from './NavBar';
import './Header.css'
 
function Header() {
    return (
        <>
           <NavBar/>
            <div className='all-content'>
            <Navtab/>
                <Advertisement/>
            <Cards />
                <Footer/>
            </div>
        </>
    );
}

export default Header;
