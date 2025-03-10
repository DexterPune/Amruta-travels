import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactInformation() {
  return (
    <div className="">
        <h5 className="pb-3 pt-3">Contact Information</h5>

        <div className="services__two-item">
          <div className="mybox1 text-center p-3 mb-3">
            <a href="tel:+91 7058638153">
              <i className="bi bi-telephone-fill fs-1"></i>
              <div>
                <a href="tel:+91 8421333435">+91 8421333435</a>
                <a href="tel:+91 7875774499">+91 7875774499</a>
                <a href="tel:+91 7620411277">+91 7620411277</a>
                <a href="tel:+91 9284718314">+91 9284718314</a>
              </div>
            </a>
          </div>

          <div className="mybox1 text-center p-3 mb-3">
            <a href="mailto:booking@amrutatravel.com">
              <i className="bi bi-envelope fs-1"></i>
              <div className="">
                <a href="mailto:booking@amrutatravel.com">
                  booking@amrutatravel.com
                </a>
              </div>
            </a>
          </div>

          <div className="mybox1 text-center p-3 mb-3">
            <a href="./">
              <i className="bi bi-house-fill fs-1"></i>
              <p>
                Amruta Travels:
                Office No.- 2, Ground Floor, Wings H-(Puram), Prayeja City,
                Phase-2, Near Prayeja City, Vadgaon Budruk, Pune, Maharashtra -
                411041
              </p>
            </a>
          </div>
        </div>
      </div>
  );
}

export default ContactInformation;
