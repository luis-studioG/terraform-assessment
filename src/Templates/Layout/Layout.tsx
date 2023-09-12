import { FC } from 'react';

import { WrapperRouteProps } from '@/utils/routes/interfaces';

export const Layout: FC<WrapperRouteProps> = ({ children }) => {
  return (
    <div className="w-full pt-[15px] bg-darkbkg relative min-h-[100vh]">
      <main className="w-full ">{children}</main>
    </div>
  );
};
