import { FC } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

export interface IJobItemSmallProps {
  data: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    salary: string;
    city: string;
  };
}
const JobItemSmall: FC<IJobItemSmallProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="bg-white p-2 border-b flex items-center space-x-2"
    >
      <img
        src={data.companyLogo}
        alt={data.companyName}
        className="w-12 h-12 rounded object-cover"
      />
      <div>
        <h5 className="text-[13px] font-semibold">{data.jobTitle}</h5>
        <div className="flex">
          <div className="flex items-center text-gray-600">
            <AiOutlineDollar color="var(--primary-color)" />
            <p className="text-[12px] ml-1">{data.salary}</p>
          </div>
          <div className="flex items-center text-gray-600 ml-4">
            <CiLocationOn color="var(--primary-color)" />
            <p className="text-[12px] ml-1">{data.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItemSmall;
