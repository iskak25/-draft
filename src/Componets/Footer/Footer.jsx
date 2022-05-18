import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contacts">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, sint voluptatum a exercitationem expedita mollitia
            tempore nulla reiciendis quas numquam magni, culpa dignissimos
            possimus. Iure sed odit obcaecati autem repellendus.
          </p>
          {/* <div className="footer_logo">
            <img
              src="https://www.nomadsland.ch/sites/default/files/icons/nomadspirit.svg"
              alt=""
            />
          </div> */}

          <div className="footer_contacts__logo">
            <a href="*">
              <img
                src="https://cdn-icons.flaticon.com/png/512/4138/premium/4138166.png?token=exp=1645444275~hmac=9113f7fd311ca391cfa211d9c464866a"
                alt="Facebook"
              />
            </a>
            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                alt="Instagram"
              />
            </a>

            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384012.png"
                alt="Youtube"
              />
            </a>
            <a href="*">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384007.png"
                alt="Whatsapp"
              />
            </a>
          </div>
        </div>
        <div className="footer_two">
          {" "}
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            ex!
          </h5>
        </div>
      </div>

      {/* <div className="footer">
        <div className="footer_info">
          <div className="footer__text">
            <div className="footer__text_item">
              <ul>
                <a href="*">about Us</a>
                <a href="*">about Us</a>
                <a href="*">about Us</a>
              </ul>
            </div>
            <div className="footer__text_item">
              <ul>
                <a href="*">partners</a>
                <a href="*">partners</a>
                <a href="*">partners</a>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className="footer_contacts__end">
          <img
            src="https://www.nomadsland.ch/themes/custom/benomad/images/logos/nomadsland-logo-on-dark.svg"
            alt=""
          />
          <h4>названия компани</h4>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
