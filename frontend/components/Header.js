import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Game List</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>About</div>
  </div>
);

export default Header;
