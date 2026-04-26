import logo from "../assets/images/logo.jpg";
function Navbar() {
  return (
     <nav className="nav">
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo-img" />
        <h1>QuadraCycle</h1>
      </div>
    </nav>
  );
}

export default Navbar;