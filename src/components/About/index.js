import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const About = props => (
  <>
    <div className="absolute">
      <Header />
    </div>
    <div className="white-background">
      <div className="About-Image">
        <h1 className="About-heading1">Who We Are</h1>
      </div>
      <div className="About-container">
        <img
          src="https://rubixe.com/assets/img/aboutus/about-us.jpg"
          alt="aboutus"
        />
        <div>
          <h1 className="heading1">A Bit About Us</h1>
          <p className="paragraph1">
            Rubixe™ is a global technology company specializing in disruptive
            technologies – Artificial
            <br />
            Intelligence (AI), Machine Learning, Robotic Process Automation
            (RPA), BlockChain and <br />
            Internet of Things (IoT). Rubixe mission to enable businesses to
            leverage the full potential of
            <br />
            disruptive technologies to stay competitive in the market.
          </p>
          <p className="paragraph1">
            Started in 2008, providing technology solutions based in the
            Netherlands, founders of
            <br />
            Rubixe™ have gained expertise in cutting-edge technology through
            delivering several smart
            <br />
            city solutions for European Commission (EC) projects.
          </p>
          <p className="paragraph1">
            At Rubixe™, we make your business more efficient, more predictable
            and more effective,
            <br />
            turning complex challenges into solutions by leveraging disruptive
            technologies, providing a<br />
            strategic competitive advantage. We serve clients in most industries
            including Banking & <br />
            Finance, Retail, e-commerce, healthcare, logistics et., We have the
            capability to deliver <br />
            solutions to clients of all sizes across the globe.
          </p>
        </div>
      </div>
      <div className="light-blue-container1">
        <h1 className="heading2">The Management Team</h1>
        <p className="paragraph1">
          At Rubixe™, we make your business more efficient, more predictable and
          more effective, turning complex
          <br />
          challenges into solutions by leveraging disruptive technologies,
          providing a strategic competitive advantage. We
          <br />
          serve clients in most industries including Banking & Finance, Retail,
          e-commerce, healthcare, logistics et., We have
          <br />
          the capability to deliver solutions to clients of all sizes across the
          globe.
        </p>
        <div className="Over-all-container">
          <div className="Founders-container">
            <img
              src="https://rubixe.com/assets/img/home/ashok1.jpg"
              className="Founder-Image"
              alt="ashok"
            />
            <h1 className="Founder-heading">Ashok Kumar A</h1>
            <p className="Founder-paragraph">Founder & CEO</p>
          </div>
          <div className="Founders-container">
            <img
              src="https://rubixe.com/img/deepak-profile.jpg"
              className="Founder-Image"
              alt="deepak"
            />
            <h1 className="Founder-heading">Deepak D</h1>
            <p className="Founder-paragraph">Program Manager</p>
          </div>
          <div className="Founders-container">
            <img
              src="https://rubixe.com/assets/img/home/ranjith.jpg"
              className="Founder-Image"
              alt="ranjith"
            />
            <h1 className="Founder-heading">Ranjith Kumar J</h1>
            <p className="Founder-paragraph">Director Technology</p>
          </div>
          <div className="Founders-container">
            <img
              src="https://rubixe.com/assets/img/home/shiva.jpg"
              className="Founder-Image"
              alt="shiva"
            />
            <h1 className="Founder-heading">Shiva PS</h1>
            <p className="Founder-paragraph">Director Marketing</p>
          </div>
        </div>
      </div>
      <div className="Footer-white-background">
        <div className="companies-container">
          <img
            src="https://rubixe.com/assets/img/clients/c1.jpg"
            alt="allianz"
          />
          <img
            src="https://rubixe.com/assets/img/clients/c2.jpg"
            alt="capgemini"
          />
          <img
            src="https://rubixe.com/assets/img/clients/c3.jpg"
            alt="Hyundai"
          />
        </div>
        <div className="companies-container">
          <img
            src="https://rubixe.com/assets/img/clients/c4.jpg"
            alt="NewDawn"
          />
          <img
            src="https://rubixe.com/assets/img/clients/c5.jpg"
            alt="Technosoft"
          />
          <img src="https://rubixe.com/assets/img/clients/c6.jpg" alt="hp" />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default About
