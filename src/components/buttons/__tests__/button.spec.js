import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../button';

describe('<Button />', () => {
  const wrapper = shallow(<Button />)
  it('should render <Button />', () => {
    expect(wrapper.length).to.equal(1)
  })

  it('should render TouchableHighlight', () => {
    expect(wrapper.find('TouchableHighlight').length).to.equal(1)
  })

  it('should render View = 1', () => {
    expect(wrapper.find('View').length).to.equal(1)
  })

  it('should simulate click', () => {
    let testCount = 0
    const onHandlePress = () => (testCount = 1);
    const wrapperComponent = shallow(<Button onHandlePress={onHandlePress} color='#dfdfdf' colorPress='#ffffff' />)
    wrapper.find('TouchableHighlight').simulate('press')
    wrapperComponent.find('TouchableHighlight').simulate('press').simulate('showUnderlay')
    expect(testCount).to.equal(1)
    expect(wrapperComponent.instance().state.color).to.equal('#ffffff')
    wrapperComponent.find('TouchableHighlight').simulate('hideUnderlay')
    expect(wrapperComponent.instance().state.color).to.equal('#dfdfdf')
  })
})
