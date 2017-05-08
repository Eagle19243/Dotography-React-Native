import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PasswordField from '../passwordFields';

describe('<PasswordField />', () => {
  const wrapper = shallow(<PasswordField textLabel='Password' />)

  it('should render <PasswordField />', () => {
    expect(wrapper.length).to.equal(1)
  })
  it('should be a <View />', () => {
    expect(wrapper.node.type).to.equal(View)
  })
  it('should have <View /> equal : 3 ', () => {
    expect(wrapper.find('View').length).to.equal(3)
  })
  it('should have <TextInput /> ', () => {
    expect(wrapper.find('#passwords').length).to.equal(1)
  })
  it('should render text textLabel ', () => {
    expect(wrapper.find('#passwords').node.props.placeholder).to.equal('Password')
  })
  it('should render error message ', () => {
    const wrapperErrorMsg = shallow(<PasswordField errorMessage={'Password is required.'} />)
    wrapperErrorMsg.find('#passwords').simulate('changeText', '');
    expect(wrapperErrorMsg.find('#error-msg-wrapper-password').length).to.equal(1)
    expect(wrapperErrorMsg.find('#error-msg-wrapper-password').find('Text').contains('Password is required.')).to.equal(true)
  })
  it('should render helperText message ', () => {
    const passwordHelperText = `Your password must have: ${'\n'}• 8 or more characters${'\n'}• At least one number${'\n'}• Upper & lowercase letters${'\n'}`
    const wrapperHelperText = shallow(<PasswordField helperText={passwordHelperText} />)
    wrapperHelperText.find('#passwords').simulate('focus');
    wrapperHelperText.find('#passwords').simulate('changeText', '');
    expect(wrapperHelperText.find('#error-msg-wrapper-password').length).to.equal(1)
    expect(wrapperHelperText.find('#error-msg-wrapper-password').find('Text').contains(passwordHelperText)).to.equal(true)
  })
  it('should get password value when input value', () => {
    const inputPassword = '123456AAbb'
    let valueCallback = ''
    const onChangeText = value => (valueCallback = value)
    const wrapperField = shallow(<PasswordField onChangeText={onChangeText} />)
    wrapperField.find('#passwords').simulate('focus');
    wrapperField.find('#passwords').simulate('changeText', inputPassword);
    wrapperField.find('#passwords').simulate('blur');
    expect(valueCallback).to.equal(valueCallback)
  })
  it('should render "*" when need text label isRequired', () => {
    const wrapperRequired = shallow(<PasswordField textLabel='Password' isMandatory={true} />)
    expect(wrapperRequired.find('#passwords').node.props.placeholder).to.equal('Password *')
  })
  it('should simulate click eyes_blue button /> ', () => {
    const renter = shallow(<PasswordField />)
    expect(renter.instance().state.hidePwd).to.equal(true)
    renter.find('TouchableOpacity').simulate('press')
    expect(renter.instance().state.hidePwd).to.equal(false)
  })
})
