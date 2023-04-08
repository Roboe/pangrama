// SPDX-FileCopyrightText: 2018 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

const NewTabLink = ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default NewTabLink
