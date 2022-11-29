import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.icon} to="/"><i className="fa fa-tasks" /></Link>
          </div>
          <div className={styles.col}>
            <ul className={styles.row}>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
              to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
              to="/favorite">Favorite</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
              to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
};

export default NavBar;