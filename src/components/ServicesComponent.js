const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Why Choose Us?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Original Stems:</h3>
                  <p className="fn_desc fn_animated_text">
                  Gain access to a rich library of original stems and music samples from our diverse artist roster. Ideal for remixers, producers, and music enthusiasts looking to add a distinct twisty twist to their projects.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Artist Blogs:</h3>
                  <p className="fn_desc fn_animated_text">
                  Deep-dive into the creative process and daily life of our underground artists through regularly updated blogs. It's a rare glimpse into the minds that are shaping the music landscape.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Exclusive Merch:</h3>
                  <p className="fn_desc fn_animated_text">
                  Swomp Tow Records offers a range of exclusive merchandise, from t-shirts and vinyl records to limited edition poster prints. Show your support for your favorite artists and wear the Swomp Tow pride.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Live Sessions:</h3>
                  <p className="fn_desc fn_animated_text">
                  Experience intimate live sessions with your favorite artists. Watch them perform and interact in real-time, creating a unique and immersive musical experience.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
