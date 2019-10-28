import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import Pagination from './index';

const expectedProps = {
  rows: 10,
  page: 1,
  rowsPerPage: 10,
  handleChangePage: () => console.log('changed'),
  handleChangeRowsPerPage: () => console.log('clicked')
};

describe('Pagination Component', () => {
  expect(1).toBe(1);
    describe('Checking propTypes', () => {
        it('Should not throw error', () => {
            const paginationError = checkProps(Pagination, expectedProps);
            expect(paginationError).toBeUndefined();
        });
    });

    describe('Pagination render', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Pagination {...expectedProps} />);
        });

        it('Should render pagination without an error', () => {
            const paginationComponent = findByTestAttr(wrapper, 'app-pagination');
            expect(paginationComponent.length).toBe(1);
        });
    });

    describe('Pagination onChange', () => {
      let pageChangeMock  = jest.fn();
      let rowChangeMock = jest.fn();
      const props = { ...expectedProps, handleChangePage: pageChangeMock, handleChangeRowsPerPage: rowChangeMock };
      let wrapper = shallow(<Pagination {...props} />);

      it('call the event handlers', () => {
          const paginationComponent = findByTestAttr(wrapper, 'app-pagination');
          paginationComponent.simulate('changePage');
          paginationComponent.simulate('changeRowsPerPage');
          expect(pageChangeMock.mock.calls.length).toBe(1);
          expect(rowChangeMock.mock.calls.length).toBe(1);
      });
    });
});