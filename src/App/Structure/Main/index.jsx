// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import './style.css'

const Main = ({ intro, sections }) => (
  <main className="pc-main">
    <section className="pc-main--section pc-main--section_intro">
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
