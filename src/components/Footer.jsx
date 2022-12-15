import React from "react";

function Footer() {
  return (
    <div className="footer">
      <form>
        <div className="form-group">
          <label htmlFor="form-newsletter">Newsletter</label>
          <div>
            <input
              type="text"
              name="form-newsletter"
              id="form-email"
              placeholder="Email"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </form>
      <div className="sponsorsAndContact">
        <div>
          <p>Sponsored by</p>
          <p>put some logos here</p>
        </div>
        <div>
          <p>Contact</p>
          <p>(+45) 42 06 66 69</p>
          <p>info@lcf.dk</p>
        </div>
      </div>
      <p className="lcfCopyRight">Loudcrowdfest 2023 ©</p>
    </div>
  );
}

export default Footer;
