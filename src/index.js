// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import ReactDOM from 'react-dom'

import { unregister } from './infrastructure/registerServiceWorker'
import App from './application/App'

import './main.css'

ReactDOM.render(<App />, document.getElementById('pangram-checker'))

// Disable malfunctioning SW for users who have already registered it
unregister()
