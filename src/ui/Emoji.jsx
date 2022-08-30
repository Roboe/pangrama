// SPDX-FileCopyrightText: 2018 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

export default ({ emoji, label }) => (
  <span className="emoji" role="img" aria-label={label}>
    {emoji}
  </span>
)
