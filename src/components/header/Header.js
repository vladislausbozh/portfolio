import './style.css';

const Header = () => {
   return (
      <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>
            Hi, my name is Vlad <br/> a frontend developer
          </h1>
          <div className='header__text'>
            <p>
              with passion for learning and creating.
            </p>
          </div>
          <a href='#' className='header__btn'>
            Download CV
          </a>
        </div>
      </header>
   )
}

export default Header;