import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faAngular,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';


export const About = () => {

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'c', 'e', 'r', 'c', 'a ',' d','e', ' m', 'i']}
            idx={15}
          />
        </h1>
        <p>
          Ingeniero de sistemas en terminación académica. Me desempeño en el
          área de desarrollo web, soy una persona responsable que puede brindar
          un gran apoyo a un grupo de trabajo, me gusta comprometerme al 100 con
          todo lo que hago.{' '}
        </p>
        <p>
          En antiguos trabajos he sobresalido por mi entereza, ahora que estoy
          dando un nuevo enfoque de mi vida de aprendizaje, con el que pueda
          realizar grandes proyectos que me ayuden a crecer profesionalmente.
        </p>
        <p>
          Soy una persona abierta a el conocimiento y siempre manteniendo en lo
          posible una estabilidad emocional, me gusta leer libros en mis ratos
          libres y en las mañanas trato de praticar deporte, en estos días lo
          que mas practico es ciclismo.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}
