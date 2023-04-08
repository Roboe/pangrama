// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './style.css'

const Structure = ({ header, main, footer }) => {
  return (
    <div id="pangram-checker" className="pc-structure">
      <div className="pc-structure--header">{header}</div>
      <div className="pc-structure--body">
        {main}
        {footer}
      </div>
    </div>
  )
}

Structure.Header = Header
Structure.Main = Main
Structure.Footer = Footer

export default Structure
