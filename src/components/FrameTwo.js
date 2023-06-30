function FrameTwo() {
  return (
    <section class="reason ">
      <div className="reason__header header-row">
        <div className="one-stop">
          <h3 className="poss">One Stop. <br></br> Four <span class="url">Possibilities</span>.</h3>
        </div>
        <div className="stats stats-row">
          <div className="3m">
            <p className="no">3M</p>
            <p className="stats-a">Active users</p>
          </div>
          <div className="60m">
            <p className="no">60M</p>
            <p className="stats-l">Links & QR<br></br> codes created</p>
          </div>
          <div className="1b">
            <p className="no">1B</p>
            <p className="stats-c">Clicked & Scanned connections</p>
          </div>
          <div className="300k">
            <p className="no">300k</p>
            <p className="stats-ai">App Integrations</p>
          </div>
        </div>
      </div>
      <div className="why why-row">
        <div className="why-content">
          <div className="why-header ">
            <div className="w-row">
              <img className="line70" src={require("../images/Line 70.png")} alt="thick line"></img>
              <h3 className="why-me">Why choose <span className="url">Scissors</span></h3>
            </div>
            <div className="why__text">
              <p className="me-text">Scissors is the hub of everything that has to do<br></br> with your link management. We shorten your URLs,<br></br> allow you creating custom ones for your personal,<br></br> business, event usage. Our swift QR code <br></br>creation, management and usage tracking with<br></br> advance analytics for all of these is second to<br></br> none. </p>
            </div>
          </div>
        </div>
        <div className="why-col">
          <div className="why_card-1 card-row">
            <div className="card_1 img_flex">
                <div className="card_img">
                  <img src={require("../images/link-2.png")} alt=""></img>
                </div>
                <div class="card_content">
                  <h4 class="card-header">URL Shortening</h4>
                  <p class="short">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale,<br></br> URL redirects.</p>
                </div>
            </div>
            <div class="card_2 img_flex">
                <div class="card_img">
                  <img src={require("../images/edit.png")} alt=""></img>
                </div>
                <div class="card_content">
                  <h4 class="card-header">Custom URLs</h4>
                  <p class="custom">With Scissor, you can create custom URLs,<br></br> with the length you want! A solution for socials<br></br> and businesses.</p>
                </div>
            </div>
          </div>
          <div class="why_card-2 card-row">
            <div class="card_3 img_flex">
                <div class="card_img">
                  <img src={require("../images/grid.png")} alt=""></img>
                </div>
                <div class="card_content">
                  <h4 class="card-header">QR Codes</h4>
                  <p class="QR">Generate QR codes to your business, events.<br></br> Bring your audience and customers to your<br></br> doorstep with this scan and go solution.</p>
                </div>
            </div>
            <div class="card_4 img_flex">
                <div class="card_img">
                  <img src={require("../images/activity.png")} alt=""></img>
                </div>
                <div class="card_content">
                  <h4 class="card-header">Data Analytics</h4>
                  <p class="Data">Receive data on the usage of either your<br></br> shortened URL, custom URLs or generated QR<br></br> codes. Embedded to monitor progress.</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  
  );
}

export default FrameTwo;
