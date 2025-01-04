import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
     
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>
          Careers
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </div>

    </nav>
  );
};

export default Navbar; 