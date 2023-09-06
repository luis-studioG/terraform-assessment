export const isActiveRoute = ({ isActive }: { isActive: boolean }) => {
  return {
    textDecoration: isActive ? 'underline underline-offset-2' : '',
  };
};
