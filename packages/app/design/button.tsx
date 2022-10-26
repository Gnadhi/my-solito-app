import { TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import CommandIcon from './icons/command';

const StyledButton = styled(TouchableOpacity);

type ButtonProps = { text?: string; icon?: JSX.Element };

const Button = ({ text, icon }: ButtonProps) => (
  <StyledButton tw="border border-red-500 px-2 py-1 hover:bg-red-400 active:bg-red-400">
    {icon}
    {text}
  </StyledButton>
);
export default Button;
