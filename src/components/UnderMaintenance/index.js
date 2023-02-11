import Header from '../Header'
import Footer from '../Footer'
import {ResponsiveContainer} from './styledComponents'
import './index.css'

const UnderMaintenance = props => {
  const {history} = props
  const onClickRetry = () => {
    history.push('/')
  }

  return (
    <>
      <Header />
      <ResponsiveContainer>
        <div className="not-found-container">
          <img
            className="under-maintenance-img"
            src="https://www.teahub.io/photos/full/173-1736900_website-under-construction-hd.jpg"
            alt="Page Under Maintenance"
          />
          <h1 className="no-found-heading">Page is Under Maintenance</h1>
          <p>we are sorry, the page you requested is Under Maintenance</p>
          <p>Please go back to homepage</p>
          <button
            type="button"
            className="home-under-maintenance-page-btn"
            onClick={onClickRetry}
          >
            Home Page
          </button>
        </div>
        <Footer />
      </ResponsiveContainer>
    </>
  )
}

export default UnderMaintenance
