import React from 'react';
import { CommTop } from '../component/CommTop'
import Foot from '../component/Footer'
import '../static/comm.scss'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from '../routes/config'
import Store from '../redux/store'


export const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className='app'>
          <CommTop />
          {renderRoutes(routes)}
          <Foot />
        </div>
      </Router>
    </Provider>
  )
}
