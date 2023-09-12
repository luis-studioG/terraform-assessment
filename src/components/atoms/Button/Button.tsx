import { Button as MaterialButton } from '@mui/material';

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <MaterialButton variant="contained" onClick={onClick}>
      {text}
    </MaterialButton>
  );
}
