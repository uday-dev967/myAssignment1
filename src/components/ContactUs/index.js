import {TfiMapAlt} from 'react-icons/tfi'
import {BsMegaphone} from 'react-icons/bs'
import {GoMailRead} from 'react-icons/go'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const ContactUs = () => (
  <>
    <div className="absolute">
      <Header />
    </div>
    <div>
      <div className="contact-us-container">
        <h1>Contact Us</h1>
      </div>
      <div>
        <div>
          <h1>Contact Us</h1>
          <h1>Drop Us a Message</h1>
          <p>DO YOU HAVE A BIG IDEA WE CAN HELP WITH?</p>
          <div className="details-container">
            <div className="details">
              <TfiMapAlt className="contact-page-icons" />
              <h5>Address</h5>
              <p>
                3rd Floor, Opposite to Godavari Hotel, Kudlu Gate, Bengaluru,
                Karnataka 560068
              </p>
            </div>
            <div className="details">
              <BsMegaphone className="contact-page-icons" />
              <h5>Phone</h5>
              <p>0804-717-8999</p>
            </div>
            <div className="details">
              <GoMailRead className="contact-page-icons" />
              <h5>Email</h5>
              <p>hi@rubixe.com</p>
            </div>
          </div>
        </div>

        <div>
          <form>form</form>
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default ContactUs
