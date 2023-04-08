// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './style.css'

const Layout = ({ header, main, footer }) => {
  return (
    <div id="pangram-checker" className="pc-layout">
      <div className="pc-layout--header">{header}</div>
      <div className="pc-layout--body">
        {main}
        {footer}
      </div>
    </div>
  )
}

Layout.Header = Header
Layout.Main = Main
Layout.Footer = Footer

export default Layout
