import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Items from '../components/Items/index'

it('<CardComponent/> can render in a div element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Items/>, div);
 });

describe('<CardComponent />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Items />);
    expect(wrapper)
  });

  it('the App have 1 Cardcomponent', () => {
    const wrapper = shallow(<Items />);
    expect(wrapper.find('div.list')).toHaveLength(1);
  })
})