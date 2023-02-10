import {Link} from 'react-router-dom'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

import './index.css'

const Footer = () => (
  <>
    <div className="mymain-container">
      <div>
        <div className="mydetails-container">
          <div className="myfooter-container">
            <div className="myabout-container">
              <h6>About Us</h6>
              <p>
                Rubixe™ is a global technology company specializing in
                disruptive technologies – Artificial Intelligence (AI), Machine
                Learning, Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT). Rubixe mission to enable businesses to
                leverage the full potential of disruptive technologies to stay
                competitive in the market.
              </p>
            </div>

            <div>
              <h6>Menus</h6>
              <ul className="mylist-container">
                <li>
                  <Link to="/" className="mylink-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="mylink-item">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="mylink-item">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="mylink-item">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6>Learn more</h6>
              <ul className="mylist-container">
                <li>
                  <Link to="/about" className="mylink-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="mylink-item">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6>Address</h6>
              <div>
                Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
                Karnataka 560068
                <br />
                Phone: 0804-717-8999
                <br />
                Email: hi@rubixe.com
              </div>

              <h6>Social Media</h6>
              <div>
                <a href="https://www.facebook.com/Rubixe.Official/">
                  <AiFillFacebook value={{color: 'blue', size: '50px'}} />
                </a>
                <a href="https://www.linkedin.com/company/rubixe">
                  <AiFillLinkedin value={{color: 'blue', size: '50px'}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mycopy-write-container ">
        <div>
          <div>
            <div>
              <p>
                © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD
                INNOVATIONS PVT. LTD. | All Rights Reserved{' '}
              </p>
            </div>

            <div>
              <p>
                {/* <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
