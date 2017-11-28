import React from "react";

import "./style.less";

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <span>{this.props.cityName}</span>
          <i className="icon-angle-down" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <input type="text" placeholder="请输入关键字" />
          </div>
        </div>
        <div className="home-header-right float-right">
          <i className="icomoon icon-user" />
        </div>
      </div>;
  }
}

export default HomeHeader;
