import logo from "../assets/nc-games-logo.svg";
const Header = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="Northcoders Games Logo.  A rolling di" />
      <h1 className="title-heading">NC Games</h1>
    </header>
  );
};
export default Header;
