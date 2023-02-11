import {Component} from 'react'
import {withRouter} from 'react-router-dom'
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
              <NavLinkItem to="/ai-internship-projects">
                <NavItem>AI INTERNSHIP PROJECTS</NavItem>
              </NavLinkItem>
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
