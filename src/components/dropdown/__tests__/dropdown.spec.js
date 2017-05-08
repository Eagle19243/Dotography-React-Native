import React from 'react'
import { Platform } from 'react-native'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Dropdown from '../index'

describe('<Dropdown />', () => {
  const wrapper = shallow(<Dropdown height={20} width={30} value='MyText' />)
  it('should render <Dropdown />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a inside component correctly', () => {
    expect(wrapper.find('View').length).to.equal(2)
    expect(wrapper.find('TouchableOpacity').length).to.equal(1)
    expect(wrapper.find('Text').length).to.equal(1)
    expect(wrapper.find('Image').length).to.equal(1)
  })
  it('should be render value correctly', () => {
    expect(wrapper.find('Text').contains('MyText')).to.equal(true)
  })
  it('should be render style correctly', () => {
    expect(wrapper.find('#dropdownContainer').node.props.style.width).to.equal(30)
    expect(wrapper.find('#dropdownContainer').node.props.style.height).to.equal(20)
    expect(wrapper.find('Text').node.props.style.marginTop).to.equal(Platform.OS === 'ios' ? 5 : 0)
  })
  it('can be press and return correctly', () => {
    let count = 1
    const myWrapper = shallow(<Dropdown onHandlePress={() => (count += 1)} />)
    myWrapper.find('TouchableOpacity').simulate('press')
    expect(count).to.equal(2)
  })
})
