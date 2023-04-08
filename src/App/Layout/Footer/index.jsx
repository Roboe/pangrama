// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import './style.css'

const Footer = ({ credits, license }) => (
  <footer className="pc-footer">
    <span className="pc-footer--credits">{credits}</span>
    <span className="pc-footer--license">{license}</span>
  </footer>
)

export default Footer
