import React from 'react'
import { View } from 'react-native'
import ContentBox from './ContentBox'

const ContanerLoader = () => (
  <View>
    <ContentBox type={75} marginBottom={14} />
    <ContentBox type={50} marginBottom={23} />
    <ContentBox type={100} marginBottom={8} />
    <ContentBox type={100} marginBottom={8} />
    <ContentBox type={100} marginBottom={8} />
    <ContentBox type={100} marginBottom={26} />
    <ContentBox type={100} marginBottom={8} />
    <ContentBox type={100} marginBottom={8} />
    <ContentBox type={10} marginBottom={27} />
  </View>
)

export default ContanerLoader
