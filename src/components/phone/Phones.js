import React from 'react';
import Phone from './Phone';
import './Phones.scss';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: new Array(),
    };
  }
  componentDidMount() {
    async function fetchData(url) {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        //转或称字符串格式
      });
      const result = await response.json();
      console.log(result);
      return result;
    }
    //修改请求头
    let myHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain',
    });
    //http://localhost:8080/user
    const URL = 'http://localhost:3000/products';
    fetchData(URL)
      .then((result) => this.setState({ phones: result }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.phones.map((phone) => (
          <div className="phone" key="phone.name">
            <Phone array={phone} />
          </div>
        ))}
      </div>
    );
  }
}
export default Phones;
