import React, { Fragment } from 'react'
import NavbarBottom from './components/navbar/NavbarBottom'
import NavbarTop from './components/navbar/NavbarTop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Advice from './pages/advice/Advice'
import Sofaspage from './pages/sofaspage/Sofaspage'
import Chairspage from './pages/chairspage/Chairspage'
import Tablespage from './pages/tablespage/Tablespage'
import Productdetailpage from './pages/productdetailpage/Productdetailpage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Cartpage from './pages/cartpage/Cartpage'

const App = () => {
  return (
    <Fragment>
      <Router>
      <NavbarTop />
      <NavbarBottom />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/style-and-advice/livingroom' component={Advice} />
          <Route exact path='/sofas' component={Sofaspage} />
          <Route exact path='/chairs' component={Chairspage} />
          <Route exact path='/tables' component={Tablespage} />
          <Route exact path='/product/:id' component={Productdetailpage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/cartpage' component={Cartpage} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
