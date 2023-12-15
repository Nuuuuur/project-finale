import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="link">
          <img src="/assets/timeLOGO.png" alt="" className="topbarImg" />
        </Link>
        <nav>
          {user && (
            <div className="nav-links">
              <Link to="/home">Home</Link>
              <Link to="/aboutus">About Us</Link>

              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/aboutus">About Us</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
