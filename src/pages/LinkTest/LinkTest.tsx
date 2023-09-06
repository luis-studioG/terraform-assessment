import { FC } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@/components/atoms';

export const LinkTest: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center">
      <Button text="Back" onClick={() => navigate(-1)} />;
    </div>
  );
};
