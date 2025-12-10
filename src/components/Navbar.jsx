// src/components/Navbar.jsx
function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT - BIGGER LOGO */}
        <a href="#home" className="logo">
          <img src="/images/saned-logo.png" alt="Saned logo" />
        </a>

        {/* RIGHT - LINKS + BUTTONS */}
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#how-it-works">How It Works</a>
          </nav>

          <div className="nav-actions">
            <button
              className="btn btn-outline"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              onClick={onSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
