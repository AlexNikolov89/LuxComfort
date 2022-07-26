import React, { Fragment } from 'react'
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
import Bedspage from './pages/bedspage/Bedspage'
import Shoppage from './pages/shop/Shoppage'
import Footer from './components/footer/Footer'
import Lighteningpage from './pages/ligteningpage/Ligteningpage'
import Outdoorspage from './pages/outdoorspage/Outdoorspage'
import Officepage from './pages/officepage/Officepage'
import Accessoriespage from './pages/accessories/Accessoriespage'
import Explorepage from './pages/explorepage/Explorepage'


const App = () => {
  return (
    <Fragment>
      <Router>
      <NavbarTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/style-and-advice/livingroom' component={Advice} />
          <Route exact path='/sofas' component={Sofaspage} />
          <Route exact path='/chairs' component={Chairspage} />
          <Route exact path='/dining' component={Tablespage} />
          <Route exact path='/product/:id' component={Productdetailpage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/cartpage' component={Cartpage} />
          <Route exact path='/beds' component={Bedspage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/light' component={Lighteningpage} />
          <Route exact path='/outdoors' component={Outdoorspage} />
          <Route exact path='/office' component={Officepage} />
          <Route exact path='/accessories' component={Accessoriespage} />
          <Route exact path='/top-interior-trends' component={Explorepage} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
