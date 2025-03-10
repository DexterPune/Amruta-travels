import './smallkey.css';
<div className="col-12 col-md-4">
              {hotelImages.map((e) => {
                return (
                  <div className="box1">
                    <a
                      href="./"
                      className="d-flex justify-content-around align-items-center"
                    >
                      <div className="b1">
                        <img src={e.place} alt="" />
                      </div>
                      <div className="b2">
                        {" "}
                        <a href="./">{e.text}</a>
                      </div>
                    </a>
                  </div>
                );
              })}

              <div className="">
                <h5 className="pb-3 pt-3">Contact Information</h5>

                <div className="services__two-item">
                  <div className="mybox1 text-center p-3 mb-3">
                    <a href="tel:+91 7058638153">
                      <i class="bi bi-telephone-fill fs-1"></i>
                      <div>
                        <a href="tel:+91 7058638153">+91 7058638153</a>
                      </div>
                    </a>
                  </div>

                  <div className="mybox1 text-center p-3 mb-3">
                    <a href="mailto:hotelthegrandlegacy@gmail.com">
                      <i class="bi bi-envelope fs-1"></i>
                      <div className="">
                        <a href="mailto:hotelthegrandlegacy@gmail.com">
                          hotelthegrandlegacy
                          <br />
                          @gmail.com
                        </a>
                      </div>
                    </a>
                  </div>

                  <div className="mybox1 text-center p-3 mb-3">
                    <a href="./">
                      <i class="bi bi-house-fill fs-1"></i>
                      <p>
                        Nanshrinava Somanath Mandir, Vadgaon Sheri, pune-411014
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>


