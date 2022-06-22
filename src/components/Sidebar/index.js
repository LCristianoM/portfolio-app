import { Link } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitule from '../../assets/images/logo_sub.png'


const Sidebar = () => {
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className='sub-logo' src={LogoSubtitule} alt="slobodan" />
    </Link>
  </div>
}

export default Sidebar;