import React from 'react';


const CartTotal = (props) => {
	const { name, items, 	quitItemsValues } = props;

	const quitItem = () => {
		quitItemsValues(name)
	}

    return (
			<>
				<tr>
					<th>{name}</th>
					<th>{items}</th>
					<th><button onClick={quitItem}>Quitar</button></th>
				</tr>
			</>
    );
}

export default CartTotal