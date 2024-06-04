import "../NavBar/NavBar.css" 
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom"


function NavBar({toggle, toggleMenu, Hamburger}) {
  
  return (
    <nav className="nav_container">

        <div className='navbar'>
            <div className='log_con'>
                <div className='logo'>Finsweet</div>
                <div className='ham' onClick={toggleMenu}>{toggle?<AiOutlineClose/>:<GiHamburgerMenu/>}</div>

            </div>
            <ul className={'menuItems '}>
                <li> <Link className='link'to='/'>Home</Link></li>
                <li> <Link className='link'to='/blog'>Blog</Link></li>
                <li> <Link className='link'to='/about'>About Us</Link></li>
                <li> <Link className='link'to='/contact'>Contact</Link></li>
                <li> <Link className='link'to='/'>Subscribe</Link></li>
            </ul>
        </div>
        
            <div className={toggle? 'ul' : 'open'}>
                <ul >
                        <li> <Link className='link'to='/'>Home</Link></li>
                        <li> <Link className='link'to='/blog'>Blog</Link></li>
                        <li> <Link className='link'to='/about'>About Us</Link></li>
                        <li> <Link className='link'to='/contact'>Contact</Link></li>
                        <li> <Link className='link'to='/'>Subscribe</Link></li>
                </ul>
            </div>   

    </nav>
  )
}

export default NavBar