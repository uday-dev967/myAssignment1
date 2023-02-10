import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Services = () => (
  <>
    <div className="absolute">
      <Header />
    </div>

    <div className="white-background">
      <div className="Services-Image">
        <h1 className="services-heading">Our Services</h1>
      </div>
      <div className="Horizontal-container">
        <img
          src="https://rubixe.com/assets/img/services/technology-staffing.jpg"
          alt="technology-staffing"
          className="image-style1"
        />
        <div>
          <h1 className="heading1">Technology Staffing Services</h1>
          <p className="para1">
            Rubixe provides reliable and high-quality staffing solutions that{' '}
            <br />
            offer you the ability to build your staff strength without <br />
            absorbing them full time, assist overloaded employees during <br />
            critical times, and keep projects moving. Unlike the traditional{' '}
            <br />
            staffing model, Rubixe takes the responsibility of the work being{' '}
            <br />
            delivered through staffing engagement, so the client can be sure{' '}
            <br />
            of the deliverables in time, with meeting and exceeding <br />
            expectations.
            <br />
          </p>
          <p className="para2">
            At Rubixe, Staffing is a fast-growing vertical, managed by senior{' '}
            <br />
            professionals with more than four decades of combined industry{' '}
            <br />
            experience.
          </p>
        </div>
      </div>

      <div className="Horizontal-container">
        <div>
          <h1 className="heading2">Robotic Process Automation (RPA)</h1>
          <p className="para3">
            Robotic Process Automation (RPA) is poised to impact more than 60%{' '}
            <br />
            of the IT jobs in the next 5 years. Companies consider RPA as a{' '}
            <br />
            strategic competitiveness as it transforms processes to 5x <br />
            productive through automation, directly impacting the bottom line.
          </p>
          <p className="para4">
            Rubixe team specializes in most popular RPA tools including <br />
            BluePrism, UiPath, and Automation Anywhere. Our RPA services team{' '}
            <br />
            has evolved to deliver solutions from analysis business process{' '}
            <br />
            status quo to implementing complete RPA solutions.
          </p>
        </div>
        <img
          src="https://rubixe.com/assets/img/services/rpa.jpg"
          alt="Rpa"
          className="image-style2"
        />
      </div>
      <div className="Horizontal-container">
        <img
          src="https://rubixe.com/assets/img/services/machine-learning.jpg"
          alt="machine-learning"
          className="image-style1"
        />
        <div>
          <h1 className="heading1">AI & Machine Learning</h1>
          <p className="para1">
            Artificial Intelligence and Machine Learning entered the mainstream
            business, disrupting
            <br />
            business, disrupting existing business models through predictive
            capabilities AI and
            <br />
            Machine Learning. There are already existing use cases in most of
            the industries from
            <br />
            predicting churn rate in a telecom company, medical diagnosis to
            predicting <br />
            consumer behavior in e-commerce.
          </p>
          <p className="para2">
            Rubixe has not only in-house AI consulting for top industries but
            also capability <br />
            to deliver full-scale AI and Machine learning solutions.
          </p>
        </div>
      </div>
      <div className="Horizontal-container">
        <div>
          <h1 className="heading2">Internet of Things (IoT)</h1>
          <p className="para3">
            IoT has a phenomenal potential as a technology in shaping every
            aspect
            <br />
            of human life from productivity, convenience, luxury to
            sustainability. IoT
            <br />
            concepts were popular for more than a decade but, thanks to
            technologies <br />
            such as Big Data,BlockChain, AI, and Machine Learning, IoT has found
            a vast <br />
            market – projected to be $ 11 trillion y 2025. In the next 2 years,
            it is <br />
            expected that about 50 billion devices will be connected, which is{' '}
            <br />
            about 7 times the entire human population on earth.
          </p>
          <p className="para4">
            The founding team of Rubixe has been working in IoT solutions since{' '}
            <br />
            2008 for European Union and large European customers, through which{' '}
            <br />
            Rubixe gained a vast knowledge base in IoT solutions delivery. Not{' '}
            <br />
            sure how IoT can help or impact your business? get in touch with us.
            <br />
          </p>
        </div>
        <img
          src="https://rubixe.com/assets/img/services/iot.jpg"
          alt="Iot"
          className="image-style2"
        />
      </div>
      <Footer />
    </div>
  </>
)

export default Services
