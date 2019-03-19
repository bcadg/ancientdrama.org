import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.png';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <div className="logo">
    <span className="image main"><img src={logo} alt="" style={{ display: 'inline', position: 'relative', top: -40 }}/></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Barnard Columbia Ancient Drama</h1>
          <p></p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Current</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Recent</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
          <li><a href="https://www.eventbrite.com/o/barnard-columbia-ancient-drama-9867917254">Tickets</a></li>
        </ul>
      </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
