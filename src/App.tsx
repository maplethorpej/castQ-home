import React from 'react'
import {Router} from 'react-static'
import {hot} from 'react-hot-loader'

import Routes from 'react-static-routes'
import Analytics from './components/Analytics'
import './app.css'

const App = () => (
    <Router>
        <div className="content">
            <Analytics id="UA-126625261-1">
                <Routes/>
            </Analytics>
        </div>
    </Router>
);

export default hot(module)(App)


