import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Dropdown from './index';

const setUp = (props = {}) => {
    const defaultProps = {
        dropdownExtraClass: '',
        dropdownID: 'app',
        dataTest: 'app',
        selectedValue: '',
        dropdownLabel: 'App dropdown',
        dropdownOptions: [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}],
        onChange: (e) => { console.log('dropdown changed: ', e.target.value); },
        ...props
    };

    const component = shallow(<Dropdown { ...defaultProps }/>);
    return component;
};

describe('Dropdown Component', () => {
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const expectedProps = {
                dropdownExtraClass: '',
                dropdownID: 'app',
                dropdownLabel: 'App dropdown',
                dropdownOptions: [{option: 'one', value: 'One'}, {option: 'two', value: 'Two'}],
                dataTest: 'app',
                selectedValue: '',
                onChange: (e) => { console.log('dropdown changed: ', e.target.value)}
            };
            const dropdownError = checkProps(Dropdown, expectedProps);
            expect(dropdownError).toBeUndefined();
        });
    });

    describe('Dropdown render', () => {
        let wrapper;
        beforeEach(() => {
            const props = { };

            wrapper = setUp(props);
        });

        it('Should render dropdown without an error', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            expect(dropdownComponent.length).toBe(1);
        });

        it('Should render dropdown label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'app-dropdown-label');
            expect(labelComponent.length).toBe(1);
        });
    });

    describe('Dropdown render without label', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                dropdownLabel: ''
            };
            wrapper = setUp(props);
        });

        it('Should render dropdown without an error', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            expect(dropdownComponent.length).toBe(1);
        });

        it('Should not render label without an error', () => {
            const labelComponent = findByTestAttr(wrapper, 'app-dropdown-label');
            expect(labelComponent.length).toBe(0);
        });
    });

    describe('Dropdown does not render without options', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                dropdownOptions: null
            };
            wrapper = setUp(props);
        });

        it('Should not render dropdown without an option', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            expect(dropdownComponent.length).toBe(0);
        });
    });

    describe('Dropdown onChange', () => {
        let wrapper;
        let mockFunction;

        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                onChange: mockFunction()
            };
            wrapper = setUp(props);
        });

        it('Should call mock function without an error', () => {
            const dropdownComponent = findByTestAttr(wrapper, 'app-dropdown');
            dropdownComponent.simulate('click');
            const callback = mockFunction.mock.calls.length;

            expect(callback).toBe(1);
        });
    });

});