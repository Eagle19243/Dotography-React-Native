import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ButtonGradient from '../buttonGradient';

describe('<ButtonGradient />', () => {
  const wrapper = shallow(<ButtonGradient />)

  it('should render <ButtonGradient />', () => {
    expect(wrapper.length).to.equal(1)
  })

  it('should be a <LinearGradient />', () => {
    expect(wrapper.find('LinearGradient').length).to.equal(1)
  })

  it('should render <TouchableOpacity />', () => {
    expect(wrapper.find('TouchableOpacity').length).to.equal(1)
  })

  it('should render <Text />', () => {
    expect(wrapper.find('Text').length).to.equal(1)
    expect(wrapper.find('Text').contains('button')).to.equal(true)
  })

  it('should render <Text name="SIGNIN" /> ', () => {
    const renderButtonGradient = shallow(<ButtonGradient name={'SIGNIN'} />)
    expect(renderButtonGradient.find('Text').length).to.equal(1)
    expect(renderButtonGradient.find('Text').contains('SIGNIN')).to.equal(true)
  })
})
