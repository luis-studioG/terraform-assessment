import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import ROUTE_NAME from '@/utils/routes/url-constants';

export const NotFound = () => {
  const navigate = useNavigate();

  const title = 'Pulse - Page Not Found';
  useEffect(() => {
    document.title = title;
  }, [title]);
  const goBack = () => {
    navigate(ROUTE_NAME.HOME);
  };

  const lostTitle = 'Oops, something went wrong...';
  const lostMessage =
    'Sorry, the page you are looking for doesn’t exist or appears to be down. Please try again later.';
  const btnText = 'Back to Pulse';

  return (
    <main className="w-[100vw] h-[100vh] bg-darkbkg text-white flex items-center">
      <div className='bg-[url("/src/assets/images/NotFoundBg.svg")] w-[100vw] h-[100vh] bg-repeat-x bg-center'></div>
      <div className="absolute w-[100vw] pl-[7rem] flex flex-col gap-[30px]">
        <div>
          <h1 className="h1 text-7xl font-body text-left w-[510px] leading-[80px]">{lostTitle}</h1>
        </div>
        <div className="w-[434px] font-body text-[28px] leading-7">
          <p>{lostMessage}</p>
        </div>
      </div>
    </main>
  );
};
