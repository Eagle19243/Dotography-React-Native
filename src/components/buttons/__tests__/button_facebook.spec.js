import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ButtonFacebook from '../buttonFacebook';

describe('<ButtonFacebook />', () => {
  const wrapper = shallow(<ButtonFacebook />)
  it('should render <ButtonFacebook />', () => {
    expect(wrapper.length).to.equal(1)
  })

  it('should render TouchableHighlight', () => {
    expect(wrapper.find('TouchableHighlight').length).to.equal(1)
  })

  it('should render View = 3', () => {
    expect(wrapper.find('View').length).to.equal(3)
  })

  it('should simulate click', () => {
    let testCount = 0
    const onHandlePress = () => (testCount = 1);
    const wrapperComponent = shallow(<ButtonFacebook onHandlePress={onHandlePress} />)
    wrapperComponent.find('TouchableHighlight').simulate('press').simulate('showUnderlay').simulate('hideUnderlay')
    expect(testCount).to.equal(1)
  })
})
