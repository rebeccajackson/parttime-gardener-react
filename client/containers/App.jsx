import React, { Fragment } from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'


import Table from './Table'
import Register from './Register';
import Login from './Login';
import Nav from './Nav';

export function App({ auth }) {

  return(
    <Router>
      <Fragment>
        <div id="home">
        <Nav />
       
          {!auth.isAuthenticated ?
            <div className="home-page">
              <Route path="/login" component={Login} />}
              <Route path="/register" component={Register} />
            </div>
          : <Table />
          }        
        </div>
      </Fragment>
    </Router>
  )
  
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(App)

