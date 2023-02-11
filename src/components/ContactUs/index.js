import {TfiMapAlt} from 'react-icons/tfi'
import {BsMegaphone} from 'react-icons/bs'
import {GoMailRead} from 'react-icons/go'
import Header from '../Header'
import Footer from '../Footer'
import ContactUsForm from '../ContactUsForm'
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
      <div className="body-content-container">
        <div className="text-content-details">
          <h1 className="contact-title">Contact Us</h1>
          <h1>Drop Us a Message</h1>
          <p>DO YOU HAVE A BIG IDEA WE CAN HELP WITH?</p>
          <div className="details-container">
            <div className="details">
              <TfiMapAlt className="contact-page-icons" />
              <h5>Address</h5>
              <p className="contact-para-details ">
                3rd Floor, Opposite to Godavari Hotel, Kudlu Gate, Bengaluru,
                Karnataka 560068
              </p>
            </div>
            <div className="details">
              <BsMegaphone className="contact-page-icons" />
              <h5>Phone</h5>
              <p className="contact-para-details ">0804-717-8999</p>
            </div>
            <div className="details">
              <GoMailRead className="contact-page-icons" />
              <h5>Email</h5>
              <p className="contact-para-details ">hi@rubixe.com</p>
            </div>
          </div>
        </div>

        <div>
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default ContactUs
