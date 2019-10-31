import React from 'react'
import { shallow } from 'enzyme';
import { GlobalStoreContext } from  './';


export const MyComponent = (props) => {
  return <div data-test="my-component" {...props}>{props.value}</div>;
};

describe('Returns context with provider', () => {
  it("renders the child component with correct props and context passed", () => {
  
    const wrapper = shallow(
      <GlobalStoreContext.Provider>
        <MyComponent value="foobar" />
      </GlobalStoreContext.Provider>
    ).dive();
    // const props = wrapper.props();
    expect(wrapper.text()).toEqual("foobar");
  });
})