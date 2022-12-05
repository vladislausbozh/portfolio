import  './style.css';

const Navbar = () => {
   return (
      <nav className='nav'>
        <div className='container'>
          <div className='nav-row'>
            <a href='#' className='logo'>
              <strong>Web</strong> portfolio
            </a>
            <ul className='nav-list'>
              <li className='list__item'>
               <a href='#' className='nav-list__link nav-list__link--active'>Projects</a>
              </li>
              <li className='list__item'>
               <a href='#' className='nav-list__link'>Skills</a>
              </li>
              <li className='list__item'>
               <a href='#' className='nav-list__link'>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   )
}

export default Navbar;