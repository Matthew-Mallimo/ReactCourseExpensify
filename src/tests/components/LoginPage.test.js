import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/LoginPage';
import { startLogin } from '../../actions/auth';

test('should correctly render Loginpage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});
