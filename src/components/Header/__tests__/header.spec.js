import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from '../index';

describe('<Header />', () => {
  const wrapper = shallow(<Header />)
  it('should render <Header />', () => {
    expect(wrapper.length).to.equal(1)
  })

  it('should render Header with LinearGradient', () => {
    const wrapperComponent = shallow(<Header />)
    expect(wrapperComponent.find('LinearGradient').length).to.equal(1)
    expect(wrapperComponent.find('#headerWithColor').length).to.equal(0)
  })

  it('should render Header with HeaderWithColor', () => {
    const wrapperComponent = shallow(<Header backgroundColor={{}} />)
    expect(wrapperComponent.find('LinearGradient').length).to.equal(0)
    expect(wrapperComponent.find('#headerWithColor').length).to.equal(1)
  })

  it('should test left button default in header', () => {
    let testHeaderGradientValueHandleAction = false
    let testHeaderColorValueHandleAction = false
    const testHeaderGradientFunc = () => (testHeaderGradientValueHandleAction = true)
    const testHeaderColorFunc = () => (testHeaderColorValueHandleAction = true)
    const textButton = 'GoBack'
    const wrapperHeaderGradientHandleAction = shallow(
      <Header leftButton={textButton} leftAction={testHeaderGradientFunc} />)
    wrapperHeaderGradientHandleAction.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderGradientHandleAction.find('#buttonDefault').length).to.equal(1)
    expect(testHeaderGradientValueHandleAction).to.equal(true)

    const wrapperHeaderColorHandleAction = shallow(<Header leftAction={testHeaderColorFunc} backgroundColor={{ backgroundColor: 'red' }} leftButton={textButton} />)
    wrapperHeaderColorHandleAction.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderColorHandleAction.find('#buttonDefault').length).to.equal(1)
    expect(testHeaderColorValueHandleAction).to.equal(true)

    const wrapperHeaderGradient = shallow(<Header leftButton={textButton} />)
    wrapperHeaderGradient.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderGradient.find('#buttonDefault').length).to.equal(1)
    const wrapperHeaderColor = shallow(<Header backgroundColor={{ backgroundColor: 'red' }} leftButton={textButton} />)
    wrapperHeaderColor.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderColor.find('#buttonDefault').length).to.equal(1)
  })

  it('should test right button default in header', () => {
    let testHeaderGradientValueHandleAction = false
    let testHeaderColorValueHandleAction = false
    const testHeaderGradientFunc = () => (testHeaderGradientValueHandleAction = true)
    const testHeaderColorFunc = () => (testHeaderColorValueHandleAction = true)
    const textButton = 'GoBack'
    const wrapperHeaderGradientHandleAction = shallow(
      <Header rightButton={textButton} rightAction={testHeaderGradientFunc} />)
    wrapperHeaderGradientHandleAction.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderGradientHandleAction.find('#buttonDefault').length).to.equal(1)
    expect(testHeaderGradientValueHandleAction).to.equal(true)

    const wrapperHeaderColorHandleAction = shallow(<Header rightAction={testHeaderColorFunc} backgroundColor={{ backgroundColor: 'red' }} rightButton={textButton} />)
    wrapperHeaderColorHandleAction.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderColorHandleAction.find('#buttonDefault').length).to.equal(1)
    expect(testHeaderColorValueHandleAction).to.equal(true)

    const wrapperHeaderGradient = shallow(<Header rightButton={textButton} />)
    wrapperHeaderGradient.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderGradient.find('#buttonDefault').length).to.equal(1)
    const wrapperHeaderColor = shallow(<Header backgroundColor={{ backgroundColor: 'red' }} rightButton={textButton} />)
    wrapperHeaderColor.find('#buttonDefault').simulate('press')
    expect(wrapperHeaderColor.find('#buttonDefault').length).to.equal(1)
  })

  it('should test left button icon close in header', () => {
    let testHeaderGradientValue = false
    let testHeaderColorValue = false
    const testHeaderGradientFunc = () => (testHeaderGradientValue = true)
    const testHeaderColorFunc = () => (testHeaderColorValue = true)
    const wrapperHeaderGradient = shallow(<Header leftButton='close' leftAction={testHeaderGradientFunc} />)
    wrapperHeaderGradient.find('#buttonClose').simulate('press')
    expect(wrapperHeaderGradient.find('#buttonClose').length).to.equal(1)
    expect(testHeaderGradientValue).to.equal(true)

    const wrapperHeaderColor = shallow(<Header leftAction={testHeaderColorFunc} backgroundColor={{ backgroundColor: 'red' }} leftButton='close' />)
    wrapperHeaderColor.find('#buttonClose').simulate('press')
    expect(wrapperHeaderColor.find('#buttonClose').length).to.equal(1)
    expect(testHeaderColorValue).to.equal(true)
  })

  it('should test left button icon back in header', () => {
    let testHeaderGradientValue = false
    let testHeaderColorValue = false
    const testHeaderGradientFunc = () => (testHeaderGradientValue = true)
    const testHeaderColorFunc = () => (testHeaderColorValue = true)
    const wrapperHeaderGradient = shallow(<Header leftButton='back' leftAction={testHeaderGradientFunc} />)
    wrapperHeaderGradient.find('#buttonBack').simulate('press')
    expect(wrapperHeaderGradient.find('#buttonBack').length).to.equal(1)
    expect(testHeaderGradientValue).to.equal(true)

    const wrapperHeaderColor = shallow(<Header leftAction={testHeaderColorFunc} backgroundColor={{ backgroundColor: 'red' }} leftButton='back' />)
    wrapperHeaderColor.find('#buttonBack').simulate('press')
    expect(wrapperHeaderColor.find('#buttonBack').length).to.equal(1)
    expect(testHeaderColorValue).to.equal(true)
  })

  // leftAction

  // renderButton
  // LinearGradient
})
