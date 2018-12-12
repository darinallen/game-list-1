import Link from 'next/link';

const Home = props => (
  <div>
    <h1>Home</h1>
    <Link href="/list">
      <a>List</a>
    </Link>
  </div>
);

export default Home;
