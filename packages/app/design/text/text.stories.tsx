import { Meta } from '@storybook/react'

import { Text } from './text'

export default {
  component: Text,
  title: 'Text',
} as Meta

export const TextXS = () => <Text tw="bg-red-100 text-xl">TextXS</Text>
