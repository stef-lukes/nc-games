import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link className="link main-nav-link" to="/">
        Home
      </Link>
      <Link className="link main-nav-link" to="/reviews">
        Reviews
      </Link>
      <DropdownMenu />
    </nav>
  );
};

export default Navbar;
