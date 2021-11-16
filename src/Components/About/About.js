import style from './About.module.css'
import { Parallax } from 'react-scroll-parallax';

function About(props) {

  // -190, 350

  return (
    <Parallax className={style.wrapper} x={[-280, 350]} tagOuter="div"> 
        About About About About
    </Parallax>
  );
}

export default About;
