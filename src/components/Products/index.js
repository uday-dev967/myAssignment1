import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Products = props => {
  const onClickContactUs = () => {
    const {history} = props
    history.push('/contact-us')
  }
  return (
    <>
      <Header />
      <div className="white-background">
        <div className="Products-Image">
          <img
            src="https://t3.ftcdn.net/jpg/04/20/08/90/360_F_420089054_FJvwGNecc6jbXu3pMHKdoTcwvqyxAbwG.jpg"
            alt="products-1"
            className="products-Image-style"
          />
          <h1 className="Products-heading">Our Products</h1>
          <img
            src="https://t3.ftcdn.net/jpg/04/20/08/90/360_F_420089054_FJvwGNecc6jbXu3pMHKdoTcwvqyxAbwG.jpg"
            alt="products-2"
            className="products-Image-style"
          />
        </div>

        <div className="Horizontal-container-1">
          <img
            src="https://rubixe.com/assets/img/products/chatbot.png"
            alt="chatbot"
            className="robot-image"
          />
          <div>
            <h1 className="robot-heading1">Rubixe Chatbot</h1>
            <p className="orange-p">_______</p>
            <p className="robot-para1">
              The chatbots disruption is unleashing a wide gamut of applications
              from healthcare <br />
              assistance to transforming entire BPO industry build on customer
              support <br />
              services. With the advances in the field of Natural Language
              Processing (NLP) <br />
              and TTS (Text to Speech), Chatbots have become more natural and
              replacing the <br />
              need for humans for customer support in the first line
            </p>
            <p className="robot-para2">
              Rubixe has developed a versatile Chatbot platform, which can be
              customized to the <br />
              business of any industry in a matter of a few days, given that we
              have related chat <br />
              data from the past chat history. It is proven that Chatbots have
              gained a better <br />
              customer satisfaction as compared to human beings, with a fraction
              of cost. <br />
              Interested? getin touch with us for a live demo.
            </p>
          </div>
        </div>
        <div className="Horizontal-container-2">
          <div>
            <h1 className="robot-heading2">ai4commerce</h1>
            <p className="orange-p">_______</p>
            <p className="robot-para3">
              ai4commerce is an artificial intelligence software residing in the
              e-commerce site,
              <br />
              which calculates the probability of products purchased for website
              visitors and <br />
              shows only products which have high buying probability. It is
              proven that this <br />
              enhances sales by at least 20% over a period of time and, thus, is
              very effective <br />
              in adding significant positive value to the business. This is a
              plug and play <br />
              production in an e-commerce
            </p>
          </div>
          <img
            src="https://rubixe.com/assets/img/products/Ai4commerce.jpg"
            alt="commerce"
            className="robot-image"
          />
        </div>
        <div className="Blue-container">
          <h1 className="White-heading">
            Would You Like To Learn More About Our
            <br />
            Business?
          </h1>
          <button
            className="Contact-button"
            type="button"
            onClick={onClickContactUs}
          >
            CONTACT US NOW
          </button>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Products
