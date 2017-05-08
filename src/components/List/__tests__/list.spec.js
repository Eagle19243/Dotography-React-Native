import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import List from '../index'

describe('<List />', () => {
  const wrapper = shallow(<List />)
  it('should render <List />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a inside component correctly', () => {
    expect(wrapper.find('View').length).to.equal(1)
    expect(wrapper.find('ListView').length).to.equal(1)
  })
  it('should be render field in list correctly (include default props)', () => {
    const field = wrapper.instance().renderField({ name: 'Title' })
    expect(field.type.displayName).to.equal('TouchableHighlight')
    field.props.onPress()
    const footer = wrapper.instance().renderFooterField()
    expect(footer).to.equal(null)
  })
})
