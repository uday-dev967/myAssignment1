import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {
  HeaderContainer,
  NavLinkItem,
  LogoTitleContainer,
  Logo,
  NavBtn,
  NavItem,
  NavItemsContainer,
  NavListItem,
} from './styledComponents'
import './index.css'

const pageList = [
  {id: 'HOME', link: '/'},
  {id: 'SERVICES', link: '/services'},
  {id: 'PRODUCTS', link: '/products'},
  {id: 'AI INTERNSHIP', link: '/'},
  {id: 'CAREER', link: '/career'},
  {id: 'BLOG', link: '/blog'},
  {id: 'ABOUT', link: '/about'},
  {id: 'CONTACT US', link: '/contact-us'},
]

class Header extends Component {
  onClickManagement = () => {
    const {history} = this.props
    history.push('/ai-for-workforce-management')
    console.log('manage')
  }

  render() {
    const NavElements = props => {
      const {itemDetails} = props
      const {id} = itemDetails
      if (id !== 'AI INTERNSHIP') {
        const {link} = itemDetails
        return (
          <NavListItem>
            <NavLinkItem to={link}>
              <NavItem>{id}</NavItem>
            </NavLinkItem>
          </NavListItem>
        )
      }
      const management = () => {
        console.log('hai')
        return <Redirect to="/ai-work" />
      }
      return (
        <div>
          <Popup
            trigger={
              <NavBtn className="trigger-button" type="button">
                {id}
              </NavBtn>
            }
          >
            <div className="popup-container">
              <NavLinkItem to="/incubation-center">
                <NavItem>INCUBATION CENTER</NavItem>
              </NavLinkItem>
              <div>
                <Popup
                  trigger={
                    <NavBtn className="trigger-button" type="button">
                      AI INTERNSHIP PROJECTS
                    </NavBtn>
                  }
                  position="right center"
                >
                  <div className="popup-container">
                    <NavLinkItem to="/ai-for-workforce-management">
                      <NavItem onClick={management}>
                        AI FOR WORKFORCE MANAGEMENT
                      </NavItem>
                    </NavLinkItem>
                    <NavLinkItem to="/ai-for-pest-detection">
                      <NavItem>AI FOR PEST DETECTION</NavItem>
                    </NavLinkItem>

                    <NavLinkItem to="/ai-for-healthy-diet">
                      <NavItem>AI FOR HEALTHY DIET</NavItem>
                    </NavLinkItem>
                    <NavLinkItem to="/ai-for-hiring">
                      <NavItem>AI FOR HIRING</NavItem>
                    </NavLinkItem>
                  </div>
                </Popup>
              </div>
              <NavLinkItem to="/apply-online">
                <NavItem>APPLY ONLINE</NavItem>
              </NavLinkItem>
            </div>
          </Popup>
        </div>
      )
    }
    return (
      <HeaderContainer>
        <NavLinkItem to="/">
          <LogoTitleContainer>
            <Logo
              src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
              alt="home image"
            />
          </LogoTitleContainer>
        </NavLinkItem>
        <NavItemsContainer>
          {pageList.map(each => (
            <NavElements key={each.id} itemDetails={each} />
          ))}
        </NavItemsContainer>
      </HeaderContainer>
    )
  }
}
export default withRouter(Header)
