import { TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Text from './text';
import CommandIcon from './icons/command';

const Button = styled(TouchableOpacity);

const CustomButton = () => (
  <Button tw="flex flex-row items-center rounded border border-transparent bg-gray-600 px-4 py-1 text-sm font-medium text-gray-200 shadow-sm">
    <CommandIcon tw="w-5 h-5 -ml-2 mr-1" />
    Ctr+K
  </Button>
);
export default CustomButton;
