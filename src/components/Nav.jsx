import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar bg-dark">
      <Link className="nav-link text-light" to="/">
        Portfolio
      </Link>
      <Link className="nav-link text-light" to="/about">
        About
      </Link>
      <Link className="nav-link text-light" to="/contact">
        Contact
      </Link>
      <Link className="nav-link text-light" to="/resume">
        Resume
      </Link>
    </nav>
  );
}