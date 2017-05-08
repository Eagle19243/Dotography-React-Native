import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import { expect } from 'chai';
import InputField, { realHeight } from '../inputTextField';

describe('<InputField />', () => {
  const wrapper = shallow(<InputField />)

  it('should render <InputField />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a <View />', () => {
    expect(wrapper.node.type).to.equal(View)
  })
  it('should have <View /> equal : 1 ', () => {
    expect(wrapper.find('View').length).to.equal(1)
  })
  it('should have <TextInput /> ', () => {
    expect(wrapper.find('#inputFields').length).to.equal(1)
  })
  it('should render <InputField textLabel="Username" /> ', () => {
    const wrapperRender = shallow(<InputField textLabel={'Username'} />)
    expect(wrapperRender.find('#inputFields').node.props.placeholder).to.equal('Username')
  })
  it('should render "*" when need text label isRequired', () => {
    const wrapperRequired = shallow(<InputField textLabel='Email address' isMandatory={true} />)
    expect(wrapperRequired.find('#inputFields').node.props.placeholder).to.equal('Email address *')
  })
  it('should test simulate focus, changeText, blur', () => {
    let isHandleOnblur = false
    const wrapperTestHandleOnBlur = shallow(<InputField
      onHandleBlur={() => (isHandleOnblur = true)} />)
    wrapperTestHandleOnBlur.find('#inputFields').simulate('focus')
    wrapperTestHandleOnBlur.find('#inputFields').simulate('changeText')
    wrapperTestHandleOnBlur.find('#inputFields').simulate('blur')
    expect(isHandleOnblur).to.equal(true)
    let isHandleOnChangeText = ''
    const valueTextChange = 'bodysman@gmail.com'
    const wrapperTestHandleOnChangeText = shallow(<InputField
      onChangeText={value => (isHandleOnChangeText = value)} />)
    wrapperTestHandleOnChangeText.find('#inputFields').simulate('focus')
    wrapperTestHandleOnChangeText.find('#inputFields').simulate('changeText', valueTextChange)
    wrapperTestHandleOnChangeText.find('#inputFields').simulate('blur')
    expect(isHandleOnChangeText).to.equal(valueTextChange)
  })
  it('should render message error', () => {
    const wrapperTestRenderErrorMessage = shallow(<InputField errorMessage='Email is required.' />)
    expect(wrapperTestRenderErrorMessage.find('#inputFieldsErrorMessage').length).to.equal(1)
    expect(wrapperTestRenderErrorMessage.find('#inputFieldsErrorMessage').find('Text').contains('Email is required.')).to.equal(true)
    expect(wrapperTestRenderErrorMessage.find('#inputFields').node.props.tintColor).to.equal('#ff0000')
    expect(wrapperTestRenderErrorMessage.find('#inputFields').node.props.highlightColor).to.equal('#ff0000')
  })
  it('should not render "*" when pass isRequired <InputField isRequired="false" /> ', () => {
    const renderisRequired = shallow(<InputField isRequired={false} />)
    expect(renderisRequired.find('#required-field').length).to.equal(0)
  })
})
