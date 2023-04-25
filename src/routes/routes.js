import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/produtos" component={Products} />
        <PrivateRoute path="/carrinho" component={Cart} />

        <PrivateRoute path={paths.Order} component={Admin} isAdmin />
        <PrivateRoute path={paths.Products} component={Admin} isAdmin />
        <PrivateRoute path={paths.NewProduct} component={Admin} isAdmin />
        <PrivateRoute path={paths.EditProduct} component={Admin} isAdmin />
      </Switch>
    </Router>
  )
}

export default MyRoutes
