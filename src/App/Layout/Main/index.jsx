// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import classNames from 'classnames'

import './style.css'

const Main = ({ intro, sections }) => (
  <main className="pc-main">
    <section
      className={classNames('pc-main--section', 'pc-main--section_intro')}
    >
      {intro}
    </section>
    {sections.map((section, index) => (
      <section key={index} className="pc-main--section">
        {section}
      </section>
    ))}
  </main>
)

export default Main
