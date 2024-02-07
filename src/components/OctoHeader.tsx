import React from 'react'

export function OctoHeader() {
  return (
    <div className="header-style">
      <section>
        <nav className="navbar">
          <ul className="nav-left-side">
            <li className="nav-title-group">
              <a className="nav-icon" href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="45"
                  height="45"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <div className="nav-title">Octodex</div>
            </li>
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a href="#">RSS</a>
            </li>
          </ul>
          <ul className="nav-right-side">
            <li className="nav-item">
              <a href="#">Follow us on Twitter</a>
            </li>
            <li className="nav-item">
              <a href="#">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}
