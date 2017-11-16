import React, { Component } from "react";
import Fetch from "./fetch/fetch";

export default class Sider extends Component {
  constructor(props) {
    super(props);
    this.fetch = new Fetch();
    this.state = {
      isLoading: true,
      result: ""
    };
  }

  componentDidMount() {
    this.onLoadData()
  }


  onLoadData(){
    const url = "https://api.github.com/search/repositories?q=js&sort=stars";
    this.fetch
      .fetchUrl(url)
      .then(result => {
        let data = result;
        this.setState({ result: JSON.stringify(data), isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }
  
  render() {
    return <div>{this.state.isLoading ? "正在加载" : this.state.result}</div>;
  }
}
