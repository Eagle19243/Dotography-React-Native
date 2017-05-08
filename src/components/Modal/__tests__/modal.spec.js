import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Modal from '../index'

describe('<Modal />', () => {
  it('should render <Modal />', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.length).to.equal(1)
  })
  it('should render View = 4', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('View').length).to.equal(4)
  })
  it('should render text title header', () => {
    const wrapper = shallow(<Modal header='ERROR' />)
    expect(wrapper.find('#textHeader').length).to.equal(1)
    expect(wrapper.find('#textHeader').contains('ERROR')).to.equal(true)
  })
  it('should render text content', () => {
    const text = 'Can\'t find user id.'
    const wrapper = shallow(<Modal text={text} />)
    expect(wrapper.find('#textContent').length).to.equal(1)
    expect(wrapper.find('#textContent').node.props.children).to.deep.equal(text.split(' ').map(value => (`${value} `)))
  })
  it('should render text with bold style when inject hasTag in to content', () => {
    const text = 'Can\'t find user id. at username = #neo , please try again.'
    const wrapper = shallow(<Modal text={text} />)
    expect(wrapper.find('#hasTag').length).to.equal(1)
  })
  it('should render text email with bold style when inject emailformat in to content', () => {
    const text = 'Can\'t find user id. at bodysman@gmail.com , please try again.'
    const wrapper = shallow(<Modal text={text} />)
    expect(wrapper.find('#hasTag').length).to.equal(1)
  })
  it('should test button Left', () => {
    const wrapper = shallow(<Modal buttonLeft textButtonLeft='Cancel' />)
    wrapper.find('#buttonLeft').simulate('press')
    expect(wrapper.find('#buttonLeft').length).to.equal(1)
    expect(wrapper.find('#buttonLeft').find('Text').contains('Cancel')).to.equal(true)
    let callbackValue = false;
    const wrapperHandleClick = shallow(<Modal onButtonLeftClick={() => (callbackValue = true)} buttonLeft textButtonLeft='Cancel' />)
    wrapperHandleClick.find('#buttonLeft').simulate('press')
    expect(callbackValue).to.equal(true)
    const wrapperNoneRender = shallow(<Modal buttonLeft={false} />)
    expect(wrapperNoneRender.find('#buttonLeft').length).to.equal(0)
  })
  it('should test button Center', () => {
    const wrapper = shallow(<Modal buttonCenter textButtonCenter='Ok' />)
    wrapper.find('#buttonCenter').simulate('press')
    expect(wrapper.find('#buttonCenter').length).to.equal(1)
    expect(wrapper.find('#buttonCenter').find('Text').contains('Ok')).to.equal(true)
    let callbackValue = false;
    const wrapperHandleClick = shallow(<Modal onButtonCenterClick={() => (callbackValue = true)} buttonCenter textButtonCenter='Ok' />)
    wrapperHandleClick.find('#buttonCenter').simulate('press')
    expect(callbackValue).to.equal(true)
    const wrapperNoneRender = shallow(<Modal buttonCenter={false} />)
    expect(wrapperNoneRender.find('#buttonCenter').length).to.equal(0)
  })
  it('should test button Right', () => {
    const wrapper = shallow(<Modal buttonRight textButtonRight='Ok' />)
    wrapper.find('#buttonRight').simulate('press')
    expect(wrapper.find('#buttonRight').length).to.equal(1)
    expect(wrapper.find('#buttonRight').find('Text').contains('Ok')).to.equal(true)
    let callbackValue = false;
    const wrapperHandleClick = shallow(<Modal onButtonRightClick={() => (callbackValue = true)} buttonRight textButtonRight='Ok' />)
    wrapperHandleClick.find('#buttonRight').simulate('press')
    expect(callbackValue).to.equal(true)
    const wrapperNoneRender = shallow(<Modal buttonRight={false} />)
    expect(wrapperNoneRender.find('#buttonRight').length).to.equal(0)
  })
})
