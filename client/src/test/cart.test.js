import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Cart from '../components/Cart/index'

const cart = { 
    PANTS: 0,
    TSHIRT: 0,
    HAT: 0 
}

it('<CardComponent/> can render in a div element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart key={1} cart={cart} quitItemsValues={() => {}} />, div);
 });

describe('<CardComponent />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Cart key={1} cart={cart} quitItemsValues={() => {}}/>);
    expect(wrapper)
  });

  it('the App have 1 Cardcomponent', () => {
    const wrapper = shallow(<Cart key={1} cart={cart} quitItemsValues={() => {}}/>);
    expect(wrapper.find('div.cart')).toHaveLength(1);
  })
})