// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Portfolio
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
