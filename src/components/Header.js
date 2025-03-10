import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navbarCollapseRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleNavItemClick = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleMobileMenuToggle = () => {
      if (navbarCollapseRef.current) {
        navbarCollapseRef.current.classList.toggle('show');
      }
    };

    const mobileMenuIcon = mobileMenuRef.current;
    mobileMenuIcon.addEventListener('click', handleMobileMenuToggle);

    return () => {
      mobileMenuIcon.removeEventListener('click', handleMobileMenuToggle);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="py-3 bgg">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <ul className="header-info list-unstyled mb-0 d-flex flex-column flex-md-row align-items-center">
            <li className="d-flex align-items-center mb-3 mb-md-0 me-md-4">
              <i className="las la-phone-volume fs-4 text-white colored me-2"></i>
              <div>
                <h5 className="mb-0">
                  <span className="d-none d-md-block colored fw-bold text-white">Call us now:</span>
                  <div className="phone-numbers d-md-flex">
                    <a href="tel:+918421333435" className="d-block text-white fw-bold">+91 8421333435&nbsp; </a>
                    <a href="tel:+917875774499" className="d-block d-md-none text-white fw-bold pt-1">+91 7875774499&nbsp;</a>
                    <a href="tel:+917875774499" className="d-none d-md-block text-white fw-bold">/&nbsp;+91 7875774499&nbsp; </a>
                    <a href="tel:+917620411277" className="d-none d-md-block text-white fw-bold">/&nbsp;+91 7620411277&nbsp; </a>
                    <a href="tel:+919284718314" className="d-none d-md-block text-white fw-bold">/&nbsp;+91 9284718314&nbsp; </a>
                  </div>
                </h5>
              </div>
            </li>
            <li className="d-flex align-items-center mb-3 mb-md-0 ms-md-4">
              <i className="las la-envelope-open fs-4 text-white colored me-2"></i>
              <div>
                <h5 className="mb-0">
                  <span className="d-none d-md-block colored fw-bold text-white">Email us:</span>
                  <a href="mailto:booking@amrutatravel.com" className="d-block text-white fw-bold">booking@amrutatravel.com</a>
                </h5>
              </div>
            </li>

            <li className="d-flex align-items-center mb-3 mb-md-0 ms-md-4">
    <a href="https://www.facebook.com/people/Amruta-travels/61567052876581/?mibextid=LQQJ4d&rdid=tr3i2vhXIDIBWmXC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ApFoorKKj%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noopener noreferrer" className="me-3">
        <i className="fab fa-facebook-f text-white"></i>
    </a>
    <a href="https://www.instagram.com/amruta_travels_/" target="_blank" rel="noopener noreferrer" className="me-3">
        <i className="fab fa-instagram text-white"></i>
    </a>
    <a href="https://x.com/home?lang=en
" target="_blank" rel="noopener noreferrer" className="me-3">
        <i className="fab fa-twitter text-white"></i>
    </a>
    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="me-3">
        <i className="fab fa-linkedin-in text-white"></i>
    </a>
    <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-pinterest-p text-white"></i>
    </a>
</li>


          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand w-50" to="/">
            <img src="/img/250x100-06.png" className="px-4 px-md-5 px-lg-0 py-md-0 logoo" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={mobileMenuRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" ref={navbarCollapseRef} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/" onClick={handleNavItemClick}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item active fw-bold" to="/about-us" onClick={handleNavItemClick}>About Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
                  <li><Link className="dropdown-item active fw-bold" to="/faqs" onClick={handleNavItemClick}>Faq's&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
                  <li><Link className="dropdown-item active fw-bold" to="/term-condition" onClick={handleNavItemClick}>Term & Condition</Link></li>
                  <li><Link className="dropdown-item fw-bold" to="/privacy-policy" onClick={handleNavItemClick}>Privacy & Policy</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/service" onClick={handleNavItemClick}>Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/our-fleet" onClick={handleNavItemClick}>Our&nbsp;Fleet</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/packages" onClick={handleNavItemClick}>Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/our-network" onClick={handleNavItemClick}>Our&nbsp;Network</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/book-taxi" onClick={handleNavItemClick}>Booking</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/gallery" onClick={handleNavItemClick}>Gallery</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </Link>
                <ul className="dropdown-menu active">
                  <li><Link className="dropdown-item active  fw-bold" to="/contact" onClick={handleNavItemClick}>Contact</Link></li>
                  <li><Link className="dropdown-item active  fw-bold" to="/enquiry" onClick={handleNavItemClick}>Enquiry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
                  <li><Link className="dropdown-item active fw-bold" to="/carrer" onClick={handleNavItemClick}>Career</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/blog" onClick={handleNavItemClick}>Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

