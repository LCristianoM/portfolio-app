import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

import './index.scss'
import Perfil from '../../assets/images/perfil.png'
import { AnimatedLetters } from '../AnimatedLetters';
import Loader from 'react-loaders';

export const Home = () => {

  const [letterClass] = useState('text-animate');
  const nameArray = [' ', 'L', 'e', 'a', 'n', 'd', 'r', 'o', ', '];
  const jobArray = ['F', 'r', 'o', 'n', 't', 'E', 'n', 'd', '  ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3400)
  // }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone col-md-8">
          <h1>
            <span className={letterClass}></span>
            <span className={`${letterClass}_12`}></span>
            <br />
            <span className={`${letterClass}_13`}>S</span>
            <span className={`${letterClass}_14`}>o</span>
            <span className={`${letterClass}_15`}>y</span>

            {/* <img src={LogoTitle} alt="dev" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
          </h1>
          <h2>Ingeniero de Sistemas / FrontEnd Developer / JavaScrip / React </h2>
          <Link to="/contact" className="flat-button">
            {' '}
            Contáctame
          </Link>
        </div>
        <div className="img-zone col-md-4">
          <img src={Perfil} alt="desarrollador" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
