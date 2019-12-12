import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="header_wrapper">
      <div class="logo">
        <Link to="/">
          <img src="public/static/logo.png" alt="usługi poligraficzne chełm" />
        </Link>
      </div>
      <div class="links">
        <ul>
          <li>
            <Link to="/">Strona głowna</Link>
          </li>
          <li>
            <Link to="/realizacje">Nasze realizacje</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
