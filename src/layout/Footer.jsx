import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h5>
                <i className="fa fa-road"></i> We Stand United.
              </h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.cybersmile.org/">Partners</a>
                    </li>
                    <li>
                      <a href="">Legal Terms</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/about">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
            </div>
            <div className="col-md-2">
              <h2 className="text-md-right">Contact Us</h2>
            </div>
            <div className="col-md-5">
              <form>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleMessage"
                    placeholder="Message"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button
                    type="button"
                    className="btn btn-secondary-outline btn-lg"
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
