import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/play">
      <a>Play</a>
    </Link>
    <Link href="/watch">
      <a>Watch</a>
    </Link>
    <Link href="/upcoming">
      <a>Upcoming</a>
    </Link>
    <Link href="/friends">
      <a>Friends</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
