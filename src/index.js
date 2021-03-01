import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './infrastructure/registerServiceWorker'
import App from './application/App'

import './main.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
