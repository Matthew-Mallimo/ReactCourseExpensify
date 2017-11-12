import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with expense total', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with one amount', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});
