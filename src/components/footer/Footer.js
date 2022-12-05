import './style.css';
import vk from '../../img/icons/vk.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';


const Footer = () => {
   return (
      <footer className='footer'>
         <div className='container'>
            <div className='footer__wrapper'>
               <ul className='social'>
                  <li className='social__item'>
                     <a href='#'>
                        <img src={vk}></img>
                     </a>
                  </li>
                  <li className='social__item'>
                     <a href='#'>
                        <img src={instagram}></img>
                     </a>
                  </li>
                  <li className='social__item'>
                     <a href='#'>
                        <img src={twitter}></img>
                     </a>
                  </li>
                  <li className='social__item'>
                     <a href='#'>
                        <img src={gitHub}></img>
                     </a>
                  </li>
                  <li className='social__item'>
                     <a href='#'>
                        <img src={linkedIn}></img>
                     </a>
                  </li>
               </ul>
            </div>
            <div className='footer__text'>
               <p>© 2022 frontend-dev.com</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer;