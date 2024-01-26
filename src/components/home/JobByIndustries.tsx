const JobByIndustries = () => {
  const industriesData = [
    {
      id: 1,
      name: 'Công nghệ thông tin',
      jobs: 1200,
    },
    {
      id: 2,
      name: 'Tài chính',
      jobs: 800,
    },
    {
      id: 3,
      name: 'Y tế',
      jobs: 600,
    },
    {
      id: 4,
      name: 'Xây dựng',
      jobs: 400,
    },
    {
      id: 5,
      name: 'Marketing',
      jobs: 550,
    },
    {
      id: 6,
      name: 'Quản lý dự án',
      jobs: 900,
    },
    {
      id: 7,
      name: 'Nhân sự',
      jobs: 300,
    },
    {
      id: 8,
      name: 'Kinh doanh',
      jobs: 700,
    },
    {
      id: 9,
      name: 'Thiết kế',
      jobs: 450,
    },
    {
      id: 10,
      name: 'Du lịch và Khách sạn',
      jobs: 250,
    },
    {
      id: 11,
      name: 'Giáo dục',
      jobs: 350,
    },
    {
      id: 12,
      name: 'Thể thao',
      jobs: 150,
    },
    {
      id: 13,
      name: 'Nghệ thuật và Thiết kế đồ họa',
      jobs: 600,
    },
    {
      id: 14,
      name: 'Dịch vụ khách hàng',
      jobs: 500,
    },
    {
      id: 15,
      name: 'An toàn và Bảo mật',
      jobs: 200,
    },
    {
      id: 16,
      name: 'Nông nghiệp và Lâm nghiệp',
      jobs: 100,
    },
    {
      id: 17,
      name: 'Hóa học và Sinh học',
      jobs: 300,
    },
    {
      id: 18,
      name: 'Thực phẩm và Nước uống',
      jobs: 250,
    },
    {
      id: 19,
      name: 'Xuất khẩu và Nhập khẩu',
      jobs: 180,
    },
    {
      id: 20,
      name: 'Thời trang',
      jobs: 400,
    },
  ];

  return (
    <section className="py-4 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
          <h3 className="text-xl">Công việc theo ngành nghề</h3>
          <a href="#" className="hover:underline text-white text-sm">
            Xem thêm
          </a>
        </div>

        <div className="bg-white p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                className="bg-gray-100 p-4 rounded shadow-md text-center"
              >
                <p className="text-md font-semibold">{industry.name}</p>
                <p className="text-gray-600">{industry.jobs} việc làm</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobByIndustries;
