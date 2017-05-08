import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ImageCircle from '../imageCircle'
import ShopIcon from '../../../assets/images/shop-store.png'

describe('<ImageCircle />', () => {
  const wrapper = shallow(<ImageCircle size={24} />)
  it('should render <ImageCircle />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a inside component correctly', () => {
    expect(wrapper.find('View').length).to.equal(1)
    expect(wrapper.find('Image').length).to.equal(1)
  })
  it('should be a inside component correctly with source image', () => {
    const myWrapper = shallow(<ImageCircle size={24} source={ShopIcon} />)
    expect(myWrapper.find('View').length).to.equal(0)
    expect(myWrapper.find('Image').length).to.equal(1)
    expect(myWrapper.find('Image').node.props.source).to.deep.equal({ uri: ShopIcon })
  })
  it('should be render default style correctly', () => {
    expect(wrapper.find('View').node.props.style).to.deep.equal({ width: 24, height: 24, borderRadius: 12, borderWidth: null, borderColor: '#ffffff', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' })
    expect(wrapper.find('Image').node.props.style).to.deep.equal({ width: 12, height: 12 })
  })
  it('should be render style correctly with default image', () => {
    const myWrapper = shallow(<ImageCircle size={24} borderWidth={1} borderColor='#000000' backgroundColor='#eeeeee' defaultImage={ShopIcon} defaultImageSize={16} />)
    expect(myWrapper.find('View').node.props.style).to.deep.equal({ width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#000000', backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center' })
    expect(myWrapper.find('Image').node.props.style).to.deep.equal({ width: 16, height: 16 })
    expect(myWrapper.find('Image').node.props.source).to.equal(ShopIcon)
  })
  it('should be render style correctly with source image', () => {
    const myWrapper = shallow(<ImageCircle size={24} source={ShopIcon} borderWidth={1} borderColor='#000000' />)
    expect(myWrapper.find('View').length).to.equal(0)
    expect(myWrapper.find('Image').node.props.style).to.deep.equal({ width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#000000' })
  })
})
