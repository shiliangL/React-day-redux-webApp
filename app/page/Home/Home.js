import React from 'react'
import { Link }  from 'react-router'
import Sider from '../../components/Sider'
export default class Home extends React.Component {
  render() {

    return (
      <div>
        <Sider/>
      </div>
    )
  }
  componentDidMount(){
    let url = 'https://www.easy-mock.com/mock/59eaec97784f01172f35ae98/api/home/api/shopParam#!method=get'
    let result = fetch(url)
      .then(res => res.json())
      .then((res) => {
        // console.log(res.data.content)
      })
    
  }
}
