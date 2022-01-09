import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// components
import Restaurants from './containers/Restaurants'
import Foods from './containers/Foods'
import Orders from './containers/Orders'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* 店舗一覧ページ */}
        <Route
          exact
          path="/restaurants"
        >
          <Restaurants />
        </Route>
        {/* 注文ページ */}
        <Route
          exact
          path="/orders"
        >
          <Orders />
        </Route>
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
            <Foods
              restaurantsId={Number(match.params.restaurantsId)}
            />
          }
        />
        <Redirect to="/restaurants" path="*"></Redirect>
      </Switch>
    </Router>
  )
}

export default App