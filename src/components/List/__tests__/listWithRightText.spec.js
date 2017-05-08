import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListWithRightText from '../listWithRightText'

describe('<ListWithRightText />', () => {
  const wrapper = shallow(<ListWithRightText />)
  it('should render <ListWithRightText />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a inside component correctly', () => {
    expect(wrapper.find('View').length).to.equal(1)
    expect(wrapper.find('ListView').length).to.equal(1)
  })
  it('should be render field in list correctly (include default props)', () => {
    const field = wrapper.instance().renderField({ name: 'Title', sub_name: 'Text' })
    expect(field.type.displayName).to.equal('TouchableHighlight')
    field.props.onPress()
  })
  it('should be render style when selected correctly', () => {
    const myWrapper = shallow(<ListWithRightText selected='Text' />)
    const field = myWrapper.instance().renderField({ name: 'Title', sub_name: 'Text' })
    expect(field.props.style).to.deep.equal([{ height: 48, paddingHorizontal: 15, paddingTop: 15, backgroundColor: '#ffffff' }, { backgroundColor: 'rgba(14, 43, 77, 0.03)' }])
  })
  it('should be render style when unselected correctly', () => {
    const myWrapper = shallow(<ListWithRightText />)
    const field = myWrapper.instance().renderField({ name: 'Title', sub_name: 'Text' })
    expect(field.props.style).to.deep.equal([{ height: 48, paddingHorizontal: 15, paddingTop: 15, backgroundColor: '#ffffff' }, { backgroundColor: '#ffffff' }])
  })
  it('can be press and return correctly', () => {
    let count = 1
    const myWrapper = shallow(<ListWithRightText onHandlePress={() => (count += 1)} />)
    myWrapper.instance().renderField({ name: 'Title', sub_name: 'Text' }).props.onPress()
    expect(count).to.equal(2)
  })
})
