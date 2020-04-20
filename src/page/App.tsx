import React from 'react';
import { CommTop } from '../component/CommTop'
import Foot from '../component/Footer'
import '../static/comm.scss'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '../routes/config'
export const App = () => {
  return (
    <Router>
      <div className='app'>
        <CommTop />
        {renderRoutes(routes)}
        <Foot />
      </div>
    </Router>
  )
}
