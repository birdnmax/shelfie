import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            img_url: '',
            product_name: '',
            price: 0
        }
    };

    newImg(val){
        this.setState({img_url: val})
    };
    newName(val){
        this.setState({product_name: val})
    };
    newPrice(val){
        this.setState({price: val})
    };
    addProduct(){
        let {img_url, product_name, price} = this.state;
        let product = {
            img_url,
            product_name,
            price
        }
        axios.post('api/product', product)
            .then(res => {
                this.props.getInventory();
                this.clearData();
            })
            .catch(err => console.log('could not post', err))
    };
    clearData(){
        this.setState({
            img_url: '',
            product_name: '',
            price: 0
        })
    };
    render() {
        return (
            <div className="Form">
                <img className='form_img' src={this.state.img_url}/>
                <p>Image URL:</p>
                <input type="text" value={this.state.img_url} onChange={e => this.newImg(e.target.val)}/>
                <p>Product Name:</p>
                <input type="text" value={this.state.product_name} onChange={e => this.newName(e.target.val)}/>
                <p>Price:</p>
                <input type="number" value={this.state.price} onChange={e => this.newPrice(e.target.val)}/>
                <div className="buttons">
                    <button className='cancel' onClick = {_ => this.clearData()}>Cancel</button>
                    <button className='add' onClinck = {_ => this.addProduct()}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;