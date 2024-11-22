import styled from 'styled-components'

// export const NavHeader = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffffff;
// `

// export const NavContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 90%;
//   max-width: 1110px;
// `

export const NavBarMobileLogoContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLargeContainer = styled(NavBarMobileLogoContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavLargeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  width: 100px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const NavBarMobileIconsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-top: 10px;
`

export const IconButton = styled.button`
  background-color: transparent;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px 3px 0 20px;
  padding: 0;
`

export const MenuPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const CloseButton = styled.div`
  align-self: center;
  margin-top: 10px;
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
`
export const LargeLogoutButton = styled.button`
  font-family: 'Roboto';
  height: 30px;
  width: 80px;
  outline: none;
  border: 1px solid #3b82f6;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
`
export const LogoutPopupContent = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const MenuListMobile = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProfileIcon = styled.img`
  width: 30px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`
