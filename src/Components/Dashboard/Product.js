import React, {Component} from 'react';
import './Product.css';

export default function Product(props) {
    let {img_url, product_name, price} = props.item;
    return (
        <div>
            <div className="Product">
                <img className='product_img' src={props.item.img_url}/>
                <p className='product_info'>{product_name}</p>
                <p className='product_info'>${price}</p>
            </div>
        </div>
    )
}
