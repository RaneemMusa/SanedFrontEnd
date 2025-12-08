function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-top">
          {/* Logo + text */}
          <div className="footer-column">
            <img
              src="/images/saned-logo.png"
              alt="Saned logo"
              className="footer-logo"
            />
            <p>Connecting communities through trusted local services.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#home">For You</a>
            <a href="#home">Community</a>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#home">Contact Us</a>
            <a href="#home">Help Center</a>
            <a href="#home">FAQs</a>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#home">Terms of Service</a>
            <a href="#home">Privacy Policy</a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Saned. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
