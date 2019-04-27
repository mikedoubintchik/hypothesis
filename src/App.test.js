import React from 'react';
import App from './App';
import {mount} from 'enzyme';
import Widget from './components/widget'

describe('when App component renders', () => {
    const wrapper = mount(<App/>);

    it('Widget component renders successfully', () => {
        expect(wrapper.find(Widget).length).toEqual(1);
    });
});
