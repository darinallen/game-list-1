import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/list">
      <a>List</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;
