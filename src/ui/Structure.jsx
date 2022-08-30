// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

export const Header = ({ title }) => (
  <header className="pc-header">
    <span className="pc-header--title">{title}</span>
  </header>
)

export const Main = ({ intro, sections }) => (
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

export const Footer = ({ credits, license }) => (
  <footer className="pc-footer">
    <span className="pc-footer--credits">{credits}</span>
    <span className="pc-footer--license">{license}</span>
  </footer>
)

export const Structure = ({ header, main, footer }) => {
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
