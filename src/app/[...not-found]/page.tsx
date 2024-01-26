import Image from 'next/image';
import { FC } from 'react';

export interface INotFoundProps {}
const NotFound: FC<INotFoundProps> = () => {
  return (
    <div className="text-center max-w-[90%]">
      <div className="w-[350px] aspect-square relative">
        <Image src="/404.png" alt="" fill />
      </div>
    </div>
  );
};

export default NotFound;
