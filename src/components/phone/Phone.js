import React from 'react';
import './Phone.scss';
import imgURL from '../../assets/product_image_placeholder.png';
class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'huawei',
      price: '20元',
      name: 'huawei11',
      clicknum: 0,
    };
  }
  handleclick = () => {
    this.setState({
      clicknum: this.state.clicknum + 1,
    });
  };
  render() {
    return (
      <div className="phone">
        <h3>{this.props.array.name}</h3>
        <img src={imgURL} />
        <div className="price_button">
          <p>{this.props.array.price}</p>
          {/* <Button className="button">add to cart</Button> */}
          <button className="button" onClick={this.handleclick}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}
export default Phone;
