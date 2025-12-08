// src/components/Header.jsx
import React from "react";
import { LogOut } from "lucide-react";

const Header = ({ setPage, auth }) => {
  // LOGOUT → go to home page
  const handleSignOut = async () => {
    try {
      if (auth) {
        await auth.signOut();
      }
    } catch (err) {
      console.error("Error signing out:", err);
    }

    // Always return to Home page
    setPage("landing");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LEFT SIDE — SAME LOGO AS FIRST NAV */}
        <button
          className="logo"
          onClick={() => setPage("landing")}
          type="button"
        >
          <img src="/images/saned-logo.png" alt="Saned logo" />
        </button>

        {/* RIGHT SIDE — NAVIGATION + LOGOUT */}
        <div className="nav-right">
          <nav className="nav-links">

            <button
              type="button"
              onClick={() => setPage("browse")}
            >
              Browse
            </button>

            <button
              type="button"
              onClick={() => setPage("post")}
            >
              Post
            </button>

            <button
              type="button"
              onClick={() => setPage("profile")}
            >
              Profile
            </button>
          </nav>

          {/* LOGOUT BUTTON */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4" style={{ marginRight: 4 }} />
              Logout
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
