import { Link, NavLink } from 'react-router-dom';

import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype  } from '@fortawesome/free-brands-svg-icons';


export const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoP} alt="logo" />
      <p className='name'>Leandro</p>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blanck"
          rel="noreferrer"
          href="https://www.linkedin.com/in/leandro-cristiano/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blanck"
          rel="noreferrer"
          href="https://github.com/LCristianoM"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blanck"
          rel="noreferrer"
          href="skype:live:leandro54566"
        >
          <FontAwesomeIcon icon={ faSkype } color="#4d4d4e" />
        </a>
      </li>
      
    </ul>
  </div>
)
