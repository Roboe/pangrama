// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import ReactDOM from 'react-dom'

import { unregister } from './browser/registerServiceWorker'

import App from './App'

ReactDOM.render(<App />, document.getElementById('pangram-checker'))

// Disable malfunctioning SW for users who have already registered it
unregister()
