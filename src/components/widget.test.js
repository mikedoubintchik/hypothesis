import {shallow} from 'enzyme';
import React from 'react';
import Widget from './widget';

describe('Widget component', () => {
    it('Fetches suggestions prop', done => {
        const fakeData = [
            {
                "username": "pturner0",
                "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
                "name": "Paula Turner"
            },
            {
                "username": "pdixon1",
                "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
                "name": "Patrick Dixon"
            }
        ];

        const wrapper = shallow(<Widget suggestions={fakeData}/>);

        setTimeout(() => {
            wrapper.update();

            expect([...wrapper.instance().props.suggestions].length).toEqual(2);

            done();
        });
    });

    it('isLoading prop is false on render', () => {
        const wrapper = shallow(<Widget/>);
        expect(wrapper.instance().props.isLoading).toBe(false);
    });
});
