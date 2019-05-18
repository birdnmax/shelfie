import React, {Component} from 'react';
import Product from './Product';
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                {this.props.inventory.map((e) => {
                    return <Product key={e.id} item={e}/>
                })}
            </div>
        )
    }
}

export default Dashboard;