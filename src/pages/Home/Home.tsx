import { FC } from 'react';

import { Button } from '@/components/atoms';
import { Card } from '@/components/molecules';

export const Home: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-white">Vite Boilerpate</h1>
      <Button text="Test button" />
      <Card />
    </div>
  );
};
