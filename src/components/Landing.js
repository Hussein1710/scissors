import { Link } from "react-router-dom";

function Landing() {
  return (
    <header>
      
      <div className="hero">
      <nav className="hero__nav">
          <div className="hero_logo cluster">
            <img src={require("../images/scissorslogo.png")} alt="App logo"></img>   
          </div>
    
        <ul className="nav__list nav_row">
            <li className="nav__items"><p className="nav__links nav__links--blue">My Url</p></li>
            <div className="to">
              <li class="nav__items"><p className="nav__links">Features</p></li><img
                src={require("../images/chevron-down.png")}
                alt="img"
                className="chevron-down"
                ></img>
            </div>
          <li className="nav__items"><p className="nav__links ">Pricing</p></li>
          <li className="nav__items"><p className="nav__links">Analytics</p></li>
          <li className="nav__items"><p className="nav__links">FAQs</p></li>
        </ul>
        
        <ul className="nav__list nav_row--2">
          <Link to={`/Login`}>Login</Link>
          <li className="nav__items"><button class="nav__links nav__link--button">Try for Free</button></li>
        </ul>
      </nav>
      <div className="content">
          <div className="hero__main-content">
            <h3 className="main-content"> Optimize Your Online Experience with Our Advanced <span class="url">URL Shortening</span> Solution</h3>
            <img
            src={require("../images/Vector 3.png")}
            alt="img"
            className="vector-3"
          ></img>
          </div>
          <div className="hero__sub-content">
            <p className="sub-content">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and  enhance user engagement.</p>  
          </div>
          <div class="involved i-row">
              <Link to={`/Signup`} > <button className="sign-btn">Sign Up</button> </Link>
              <p  className="learn" >learn more</p>
          </div>
        </div>
        <div className="transform">
          <img
            src={require("../images/GroupTwo.png")}
            alt="img"
             className="Group2"
          ></img>
          <div className="ellipse">
           <img className="shape" src={require("../images/Ellipse 1.png")} alt="my bad^_^"></img>
          <div class="shape">

          </div>

        </div>
      </div>
  
      </div>
        
    </header>
  );
}

export default Landing;
