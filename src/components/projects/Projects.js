import './style.css';
import projects01 from '../../img/projects/01.jpg';
import projects02 from '../../img/projects/02.jpg';
import projects03 from '../../img/projects/03.jpg';
import projects04 from '../../img/projects/04.jpg';
import projects05 from '../../img/projects/05.jpg';
import projects06 from '../../img/projects/06.jpg';

const Projects = () => {
   return (
      <main className='section'>
         <div className='container'>
            <h2 className='title-1'>Projects</h2>
            <ul className='projects'>
               <li className='project'>
                  <img className='project__img' src={projects01}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
               <li className='project'>
                  <img className='project__img' src={projects02}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
               <li className='project'>
                  <img className='project__img' src={projects03}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
               <li className='project'>
                  <img className='project__img' src={projects04}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
               <li className='project'>
                  <img className='project__img' src={projects05}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
               <li className='project'>
                  <img className='project__img' src={projects06}></img>
                  <h3 className='project__title'>Gaming streaming portal</h3>
               </li>
            </ul>
         </div>
      </main>
   )
}

export default Projects;