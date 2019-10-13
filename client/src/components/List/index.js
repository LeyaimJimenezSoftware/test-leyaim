import React from 'react'
import './List.css'
import hat from '../../images/HAT.jpg'
import pants from '../../images/PANTS.jpg'
import tshirt from '../../images/TSHIRT.jpg'

const List = (props) => {
  const { id, code, name, price,  getItemsValues } = props
  
  const getValue = () => {
    getItemsValues(name)
  }

    return (
      <div id={`${id}-${code}`} className="item-card">
        <div className="image-item">
          <img src={name === 'Pants' ? pants : name === 'Hat' ? hat : tshirt} alt="Logo" />
        </div>
        <div className="name">
          {name}
        </div>
        <div className="about">
          <div className="price">
            {price}
          </div>
          <div className="buy">
            <button onClick={getValue}>Agregar</button>
          </div>
        </div>
      </div>
    );
}

export default List