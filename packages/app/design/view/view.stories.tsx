import { Meta } from '@storybook/react'

import { View } from './view'

export default {
  component: View,
  title: 'View',
} as Meta

export const TextXS = () => <View tw="bg-red-100"></View>

export const TextSM = () => <View tw="bg-red-100"></View>
