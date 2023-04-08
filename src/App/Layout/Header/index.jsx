// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import './style.css'

const Header = ({ title, link }) => (
  <header className="pc-header">
    <a className="pc-header--title" href={link}>
      {title}
    </a>
  </header>
)

export default Header
