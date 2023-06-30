function Footer() {
  return (
    <div className="Footer">
      <div className="sub-footer">
        <div className="footer-logos">
          <img
            src={require("../images/footerlogo.png")}
            alt="App logo"
            className="foooter-app-logo"
          ></img>

          <div className="sm-logos">
            <img
              src={require("../images/i.fi-social-twitter.png")}
              alt="App logo"
              className="twitter-logo"
            ></img>

            <img
              src={require("../images/svg.feather.png")}
              alt="App logo"
              className="insta-logo"
            ></img>

            <img
              src={require("../images/i.fi-social-linkedin.png")}
              alt="App logo"
              className="linkedin-logo"
            ></img>

            <img
              src={require("../images/i.fi-social-facebook.png")}
              alt="App logo"
              className="fb-logo"
            ></img>
          </div>
        </div>

        <div className="sect1">
          <div className="sub-sect1">
            <ul>
              <h4>Why Scissor ?</h4>
              <li>Scissor 101</li>
              <li>Integrations & API</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="sub-sect11">
            <ul>
              <h4>Resources</h4>
              <li>Blog</li>
              <li>Resource Library</li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support</li>
              <li>Trust Center</li>
              <li>Browser Extension</li>
              <li>Mobile App</li>
            </ul>
          </div>
        </div>

        <div className="sect2">
          <div className="sub-sect2">
            <ul>
              <h4>Solutions</h4>
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </ul>
          </div>

          <div className="sub-sect22">
            <ul>
              <h4>Features</h4>
              <li>Branded Links</li>
              <li>Mobile Links</li>
              <li>Campaign</li>
              <li>Management &</li>
              <li>Analytics</li>
              <li>QR Code generation</li>
            </ul>
          </div>
        </div>

        <div className="sect3">
          <div className="sub-sect3">
            <ul>
              <h4>Products</h4>
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-in-bio</li>
            </ul>
          </div>

          <div className="sub-sect33">
            <ul>
              <h4>Legal</h4>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Acceptable Use Policy</li>
              <li>Code of Conduct</li>{" "}
            </ul>
          </div>
        </div>

        <div className="sect4">
          <ul>
            <h4>Company</h4>
            <li>About Scissor</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>

      <div className="foot">
        <p>Term of Service <strong>|</strong></p> <p>Security <strong>|</strong></p> <p>© Scissors 2023</p>    
      </div>
    </div>
  );
}
export default Footer;
