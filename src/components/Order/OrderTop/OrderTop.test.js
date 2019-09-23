import React from 'react';
import { shallow } from 'enzyme';
import OrderTop from './OrderTop';
import order from '#mocks/order';

describe('OrderTop', () => {
  it('renders correctly', () => {
    const wrapShallow = shallow(<OrderTop order={order} />).dive();
    expect(wrapShallow).toMatchSnapshot();
  });
});
