import { FC } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

export interface IJobItemProps {
  data: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    salary: string;
    city: string;
  };
}
const JobItem: FC<IJobItemProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="bg-white p-3 rounded border flex items-center space-x-4"
    >
      <img
        src={data.companyLogo}
        alt={data.companyName}
        className="w-16 h-16 rounded object-cover"
      />
      <div>
        <h5 className="text-sm font-semibold">{data.jobTitle}</h5>
        <p className="text-gray-600 mb-1 uppercase text-xs mt-1 opacity-70">
          {data.companyName}
        </p>
        <div className="flex">
          <div className="flex items-center text-gray-600">
            <AiOutlineDollar color="var(--primary-color)" />
            <p className="text-[13px] ml-1">{data.salary}</p>
          </div>
          <div className="flex items-center text-gray-600 ml-4">
            <CiLocationOn color="var(--primary-color)" />
            <p className="text-[13px] ml-1">{data.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
