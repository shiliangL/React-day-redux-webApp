import React, { Component } from 'react';
import './top_nav.css'
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="view-nav">
          <ul className="nav-list">
            <li>
                <a> 首页 </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
