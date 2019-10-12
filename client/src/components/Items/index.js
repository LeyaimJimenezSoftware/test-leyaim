import React, { useState, useEffect } from 'react';
import List from '../List/index'
import './Items.css';
import Cart from '../Cart/index'

const Items = () => {
		const [items, setItemList] = useState({});
		const [cart, setCart] = useState({ 
			PANTS: 0,
			TSHIRT: 0,
			HAT: 0
		});
    
    useEffect(() => {
			const getItemsAsync = async () => {
				const response = await	fetch('/items')
				let data = await response.json()
				return data;
			}
      getItemsAsync().then(data => setItemList(data.items));
		}, []);
		
		const getItemsValues = (value) => {
			if (value === 'T-Shirt') {
				setCart({...cart, TSHIRT: cart.TSHIRT + 1})
			}
			else if (value === 'Pants') {
				setCart({...cart, PANTS: cart.PANTS + 1})
			} else {
				setCart({...cart, HAT: cart.HAT + 1})
			}
		}

		const quitItemsValues = (value) => {
			if (value === 'TSHIRT') {
				cart.TSHIRT === 0 ? setCart({...cart, TSHIRT: 0}) : setCart({...cart, TSHIRT: cart.TSHIRT - 1})
			}
			else if (value === 'PANTS') {
				cart.PANTS === 0 ? setCart({...cart, PANTS: 0}) : setCart({...cart, PANTS: cart.PANTS - 1})
			} else if (value === 'HAT') {
				cart.HAT === 0 ? setCart({...cart, HAT: 0}) : setCart({...cart, HAT: cart.HAT - 1})
			}
		}
  
    return (
      <div className="list">
        <table>
          <thead>
          	<tr>
            	<th>id</th>
            	<th>Code</th>
            	<th>Name</th>
          		<th>Price</th>
							<th>Agregar</th>
         	 	</tr>
				 	</thead>
					<tbody>
          	{Object.keys(items).map((item, i) => <List key={i} id={i} code={item} name={items[item].name} price={items[item].price}  getItemsValues={getItemsValues}/> )}
					</tbody>
      	</table>
				<div className="Cart">
					<Cart key={1} cart={cart} quitItemsValues={quitItemsValues}></Cart>
				</div>
      </div>
    );
}

export default Items