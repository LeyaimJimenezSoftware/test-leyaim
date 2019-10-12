import React from 'react';

const List = (props) => {
  const { id, code, name, price,  getItemsValues } = props;
  
  const getValue = () => {
    getItemsValues(name)
  }

    return (
      <>
        <tr>
          <th>{id}</th>
          <th>{code}</th>
          <th>{name}</th>
          <th>{price}</th>
          <th><button onClick={getValue}>Agregar</button></th>
        </tr>
      </>
    );
}

export default List