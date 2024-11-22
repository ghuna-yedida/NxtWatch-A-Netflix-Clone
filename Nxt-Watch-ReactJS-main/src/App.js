import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'
import ActiveMenuContext from './context/ActiveMenuContext'

import './App.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeMenu: activeMenuConstants.home,
    savedVideosList: [],
    save: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {isDarkTheme, activeMenu, save, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <ActiveMenuContext.Provider
          value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/not-found" component={NotFound} />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </ActiveMenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
