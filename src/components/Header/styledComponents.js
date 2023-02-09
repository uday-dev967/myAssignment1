import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px 10px 50px;
  height: 10vh;
  background-color: #000000;
`

export const NavLinkItem = styled(Link)`
  text-decoration: none;
  color: '#ffffff';
`

export const LogoTitleContainer = styled.div``

export const Logo = styled.img`
  width: 200px;
  height: 60px;
`

export const NavBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 15px;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
`

export const NavItem = styled.p`
  color: #ffffff;
`

export const NavItemsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  min-width: 60vw;
  align-items: center;
`

export const NavListItem = styled.li`
  margin-left: 15px;
`
