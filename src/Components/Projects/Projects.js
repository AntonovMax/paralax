import style from './Projects.module.css'
import { Parallax } from 'react-scroll-parallax';

function Projects(props) {
  return (
    <Parallax className={style.wrapper} x={[350, -190]} tagOuter="div">
        Projects Projects Projects
    </Parallax>
  );
}

export default Projects;
