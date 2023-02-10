import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import {ResponsiveContainer} from './styledComponents'

const Blogs = () => (
  <>
    <Header />
    <ResponsiveContainer>
      <div className="white-background">
        <div className="AI-Image">
          <h1 className="Blog-heading1">
            Artificial Intelligence (AI) Trends for 2020
          </h1>
        </div>
        <div className="Blog-container2">
          <div className="Image-container-1">
            <img
              src="https://rubixe.com//assets/img/blog/AI-Blog.jpg"
              alt="AI-Blog"
              className="Blog-Image"
            />
            <div className="Buttons-container">
              <button className="Date-button" type="button">
                23.06.2020
              </button>
              <button className="News-button" type="button">
                NEWS
              </button>
            </div>
          </div>
          <div className="White-background-2">
            <h1 className="Blog-heading2">AI Trends for 2020</h1>
            <p className="Blog-paragraph1">
              AI is here and it does not look like its going to wear off any
              time soon. In a tech-driven environment, we all are experiencing
              an astounding growth of AI technology with so many new uses. The
              advanced use of AI technology is changing the way people live and
              work. This blog speaks about the top 12 AI trends to watch in
              2020. In short, 2020 will be an exciting year for AI development.
            </p>
            <hr />
            <button className="ReadMore-Button" type="button">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </ResponsiveContainer>
  </>
)

export default Blogs
