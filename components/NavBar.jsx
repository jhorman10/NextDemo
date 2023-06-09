import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((menuItem) => (
        <ActiveLink
          key={menuItem.href}
          text={menuItem.text}
          href={menuItem.href}
        >
          {menuItem.text}
        </ActiveLink>
      ))}
    </nav>
  );
};
