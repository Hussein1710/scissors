function FrameFour() {
  return (
    <section className="range">
      <div className="range__header">
        <div className="w-row">
          <img
            className="line70"
            src={require("..//images/Line 70.png")}
            alt="thick line"
          ></img>
          <h3 className="range-price">
            A <span className="url">price perfect</span> for your needs.
          </h3>
        </div>
        <div className="rp-text">
          <p className="got-u">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
      </div>
      <div className="range__main range-row">
        <div className="range-1">
          <p className="plan">Basic</p>
          <h4 className="price">Free</h4>
          <p className="price-text t1">Free plan for all users</p>

          <div className="t-1">
            <div className="price-row">
              <img
                src={require("../images/check-circle.png")}
                alt="bullet"
              ></img>
              <p className="item">Unlimited URL Shortening</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Basic Link Analytics</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Customizable Short Links</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Standard Support</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Ad-supported</p>
            </div>
          </div>
        </div>
        <div className="range-2">
          <p className="plan">Professional</p>
          <h4 className="price">$15/month</h4>
          <p className="price-text t2">Ideal for business creators</p>

          <div className="t-2">
            <div className="price-row">
              <img
                src={require("../images/check-circle2.png")}
                alt="bullet"
              ></img>
              <p className="item">Enhanced Link Analytics</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle2.png")} alt=""></img>
              <p className="item">Custom Branded Domains</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle2.png")} alt=""></img>
              <p className="item">Advanced Link Customization</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle2.png")} alt=""></img>
              <p className="item">Priority Support</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle2.png")} alt=""></img>
              <p className="item">Ad-free Experience</p>
            </div>
          </div>
        </div>
        <div className="range-3">
          <p className="plan">Teams</p>
          <h4 className="price">$25/month</h4>
          <p className="price-text t3">Share with up to 10 users</p>

          <div className="t-3">
            <div className="price-row">
              <img
                src={require("../images/check-circle.png")}
                alt="bullet"
              ></img>
              <p className="item">Team Collaboration</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">User Roles and Permissions</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Enhanced Security</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">API Access</p>
            </div>
            <div className="price-row">
              <img src={require("../images/check-circle.png")} alt=""></img>
              <p className="item">Dedicated Account Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="range_choice">
        <div className="range_btn-1">
          <button className=" btn-1">Get Custom Pricing</button>
        </div>
        <div className="range_btn-2">
          <button className=" btn-2">Select Pricing</button>
        </div>
      </div>
    </section>
  );
}

export default FrameFour;
