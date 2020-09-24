import React from 'react';
import './Store.scss';
import imgURL from '../../assets/shoppingcar.png';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="store">
        <h1>Store</h1>
        <img src={imgURL} />
        {/* {this.state.num.map(calculate)=>>} */}
        <p>0</p>
      </div>
    );
  }
}
export default Store;
