import JobItem from '../common/JobItem';
const AttractiveJobs = () => {
  const jobsData = [
    {
      id: 1,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Frontend Developer',
      companyName: 'CÔNG TY TNHH ABC Company',
      salary: '60 triệu - 80 triệu',
      city: 'Hà Nội',
    },
    {
      id: 2,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Backend Developer',
      companyName: 'CÔNG TY TNHH XYZ Tech',
      salary: '70 triệu - 90 triệu',
      city: 'Hồ Chí Minh',
    },
    {
      id: 3,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'UI/UX Designer',
      companyName: 'CÔNG TY TNHH DesignHub',
      salary: '50 triệu - 70 triệu',
      city: 'Đà Nẵng',
    },
    {
      id: 4,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Data Scientist',
      companyName: 'CÔNG TY TNHH DataCo',
      salary: '80 triệu - 10 triệu',
      city: 'Hà Nội',
    },
    {
      id: 5,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Marketing Manager',
      companyName: 'CÔNG TY TNHH Marketeers',
      salary: '60 triệu - 80 triệu',
      city: 'Hồ Chí Minh',
    },
    {
      id: 6,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Full Stack Developer',
      companyName: 'CÔNG TY TNHH TechNinja',
      salary: '90 triệu - 11 triệu',
      city: 'Đà Nẵng',
    },
    {
      id: 7,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Product Manager',
      companyName: 'CÔNG TY TNHH Productify',
      salary: '10 triệu - 12 triệu',
      city: 'Hà Nội',
    },
    {
      id: 8,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'Content Writer',
      companyName: 'CÔNG TY TNHH WordSmith',
      salary: '40 triệu - 60 triệu',
      city: 'Hồ Chí Minh',
    },
    {
      id: 9,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'QA Engineer',
      companyName: 'CÔNG TY TNHH QualityTech',
      salary: '70 triệu - 90 triệu',
      city: 'Đà Nẵng',
    },
    {
      id: 10,
      companyLogo: 'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
      jobTitle: 'HR Specialist',
      companyName: 'CÔNG TY TNHH HRConnect',
      salary: '50 triệu - 70 triệu',
      city: 'Hà Nội',
    },
  ];

  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div>
              <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
                <h3 className="text-xl">Việc làm hot</h3>
                <a href="#" className="hover:underline text-white text-sm">
                  Xem thêm
                </a>
              </div>

              <div className="p-2 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {jobsData.map((job) => (
                  <JobItem key={job.id} data={job} />
                ))}
              </div>
            </div>
          </div>
          <div className='col-span-1'>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/job-fair-flyer-temolate-design-template-0f2a90547c3eb228b0d07bba32ea0199_screen.jpg?ts=1637038695" alt="Catalog" className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractiveJobs;
