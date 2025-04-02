import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>NGO Logo</div>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li><Link to="/" className={`${styles.link} ${styles.hoverEffect}`}>Home</Link></li>
        <li><Link to="/about" className={`${styles.link} ${styles.hoverEffect}`}>About</Link></li>
        <li><Link to="/projects" className={`${styles.link} ${styles.hoverEffect}`}>Projects</Link></li>
        <li><Link to="/events" className={`${styles.link} ${styles.hoverEffect}`}>Events</Link></li>
        <li><Link to="/volunteer" className={`${styles.link} ${styles.hoverEffect}`}>Volunteer</Link></li>
        <li><Link to="/contact" className={`${styles.link} ${styles.hoverEffect}`}>Contact</Link></li>
        <li><button className={`${styles.donateButton} ${styles.blinkEffect}`}>Donate</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
