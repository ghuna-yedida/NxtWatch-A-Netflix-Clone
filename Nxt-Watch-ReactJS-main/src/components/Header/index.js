import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import MenuItemsList from '../MenuItemsList'

import {
  //   NavHeader,
  //   NavContent,
  NavBarMobileLogoContainer,
  WebsiteLogo,
  NavBarMobileIconsContainer,
  IconButton,
  MenuPopupMobile,
  CloseButton,
  LogoutPopupContent,
  Button,
  MenuListMobile,
  NavLargeContainer,
  NavLargeIcons,
  ProfileIcon,
  LargeLogoutButton,
} from './styledComponents'

import './index.css'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? 'white' : 'black'

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <>
              <NavBarMobileLogoContainer theme={theme}>
                <ActiveMenuContext.Consumer>
                  {activeValue => {
                    const {changeActiveMenu} = activeValue
                    return (
                      <Link to="/">
                        <WebsiteLogo
                          src={websiteLogo}
                          alt="website logo"
                          onClick={() => changeActiveMenu('HOME')}
                        />
                      </Link>
                    )
                  }}
                </ActiveMenuContext.Consumer>
                <NavBarMobileIconsContainer>
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={() => toggleTheme()}
                  >
                    {isDarkTheme ? (
                      <FiSun color="white" size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </IconButton>
                  <Popup
                    modal
                    className="popup-content"
                    trigger={
                      <IconButton type="button">
                        <GiHamburgerMenu color={color} size={22} />
                      </IconButton>
                    }
                  >
                    {close => (
                      <MenuPopupMobile theme={theme}>
                        <CloseButton>
                          <IconButton type="button" onClick={() => close()}>
                            <IoMdClose size={20} color={color} />
                          </IconButton>
                        </CloseButton>
                        <MenuListMobile>
                          <MenuItemsList />
                        </MenuListMobile>
                      </MenuPopupMobile>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <IconButton type="button">
                        <FiLogOut color={color} size={22} />
                      </IconButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <LogoutPopupContent theme={theme}>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <Button outline type="button" onClick={() => close()}>
                            Cancel
                          </Button>
                          <Button
                            bgColor="blue"
                            color="white"
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopupContent>
                    )}
                  </Popup>
                </NavBarMobileIconsContainer>
              </NavBarMobileLogoContainer>
              <NavLargeContainer theme={theme}>
                <ActiveMenuContext.Consumer>
                  {activeValue => {
                    const {changeActiveMenu} = activeValue
                    return (
                      <Link to="/">
                        <WebsiteLogo
                          src={websiteLogo}
                          alt="website logo"
                          onClick={() => changeActiveMenu('HOME')}
                        />
                      </Link>
                    )
                  }}
                </ActiveMenuContext.Consumer>

                <NavLargeIcons>
                  <IconButton type="button" onClick={() => toggleTheme()}>
                    {isDarkTheme ? (
                      <FiSun color="white" size={30} />
                    ) : (
                      <FaMoon size={30} />
                    )}
                  </IconButton>
                  <ProfileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup
                    modal
                    trigger={
                      <LargeLogoutButton theme={theme} outline>
                        Logout
                      </LargeLogoutButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <LogoutPopupContent theme={theme}>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <Button outline type="button" onClick={() => close()}>
                            Cancel
                          </Button>
                          <Button
                            bgColor="blue"
                            color="white"
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopupContent>
                    )}
                  </Popup>
                </NavLargeIcons>
              </NavLargeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
