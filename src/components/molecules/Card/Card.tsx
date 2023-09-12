import { FC } from 'react';
import { Link } from 'react-router-dom';

import { OutLineCTA } from '@/components/atoms';
import ROUTE_NAME from '@/utils/routes/url-constants';

export const Card: FC = () => {
  return (
    <div className="w-[10%] h-[40px] flex justify-center items-center bg-slate-600">
      <Link to={`${ROUTE_NAME.LINK_TEST}`}>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-white">Link</h1>
          <OutLineCTA rightArrow text="Visit" />
        </div>
      </Link>
    </div>
  );
};
