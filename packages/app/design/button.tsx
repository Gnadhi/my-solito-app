import { TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import CommandIcon from './icons/command';

const StyledButton = styled(TouchableOpacity);

type ButtonProps = { text?: string; icon?: JSX.Element };

const Button = ({ text, icon }: ButtonProps) => (
  <StyledButton tw="flex flex-row justify-center uppercase rounded border border-transparent px-3 py-1 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-700 hover:text-gray-300">
    {icon}
    {text}
  </StyledButton>
);
export default Button;
