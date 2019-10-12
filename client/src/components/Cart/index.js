import React, { useState, useEffect } from 'react';
import './Cart.css';
import CartTotal from '../CartTotal/index'

const Cart = (props) => {
		const { cart, quitItemsValues } = props;
		const [total, setTotal] = useState('');

		useEffect(() => {
			const getTotalAsync = async () => {
				try {
					const response = await fetch('/store', {
						method: 'POST',
						body: JSON.stringify(cart), 
						headers:{
							'Content-Type': 'application/json'
						}
					})
					let data = await response.json()
					return data;
				} catch(err) {
					console.log(err)
				}
			}
			getTotalAsync().then(data => setTotal(data));
		},[cart])

    return (
      <div className="cart">
        <table>
          <thead>
          	<tr>
            <th>Name</th>
            <th>Items</th>
						<th>Quitar</th>
            </tr>
            </thead>
            <tbody>
							{Object.keys(cart).map((item, i) => <CartTotal key={i} name={item} items={cart[item]} quitItemsValues={quitItemsValues} />)}
							<tr>
								<th>Total</th>
								<th>{total}</th>
								<th></th>
							</tr>
            </tbody>
      	</table>
      </div>
    );
}

export default Cart