const JobByCities = () => {
  const cityData = [
    {
      id: 1,
      name: 'Hà Nội',
      jobs: 1200,
    },
    {
      id: 2,
      name: 'Hồ Chí Minh',
      jobs: 800,
    },
    {
      id: 3,
      name: 'Đà Nẵng',
      jobs: 600,
    },
    {
      id: 4,
      name: 'Hải Phòng',
      jobs: 400,
    },
    {
      id: 5,
      name: 'Cần Thơ',
      jobs: 550,
    },
    {
      id: 6,
      name: 'Bình Dương',
      jobs: 900,
    },
    {
      id: 7,
      name: 'Đồng Nai',
      jobs: 300,
    },
    {
      id: 8,
      name: 'Hưng Yên',
      jobs: 700,
    },
    {
      id: 9,
      name: 'Thái Bình',
      jobs: 450,
    },
    {
      id: 10,
      name: 'Vĩnh Phúc',
      jobs: 250,
    },
    {
      id: 11,
      name: 'Quảng Nam',
      jobs: 350,
    },
    {
      id: 12,
      name: 'Thừa Thiên Huế',
      jobs: 150,
    },
    {
      id: 13,
      name: 'Bà Rịa - Vũng Tàu',
      jobs: 600,
    },
    {
      id: 14,
      name: 'Long An',
      jobs: 500,
    },
    {
      id: 15,
      name: 'Nam Định',
      jobs: 200,
    },
    {
      id: 16,
      name: 'Ninh Bình',
      jobs: 100,
    },
    {
      id: 17,
      name: 'Đắk Lắk',
      jobs: 300,
    },
    {
      id: 18,
      name: 'Quảng Ninh',
      jobs: 250,
    },
    {
      id: 19,
      name: 'Kiên Giang',
      jobs: 180,
    },
    {
      id: 20,
      name: 'Bắc Ninh',
      jobs: 400,
    },
  ];

  return (
    <section className="py-4 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 items-stretch">
          <div className="col-span-3 h-full bg-white">
            <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
              <h3 className="text-xl">Công việc theo tỉnh thành</h3>
              <a href="#" className="hover:underline text-white text-sm">
                Xem thêm
              </a>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cityData.map((city) => (
                  <div key={city.id}>
                    <p className="text-sm font-semibold">{`Việc làm tại ${city.name} (${city.jobs})`}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
              <h3 className="text-xl">Tìm kiếm nâng cao</h3>
              <a href="#" className="hover:underline text-white text-sm">
                Xem thêm
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Ngành nghề
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {/* Options for industry */}
                    <option value="it">Công nghệ thông tin</option>
                    <option value="finance">Tài chính</option>
                    {/* ... */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Repeat the structure for other filters (level, experience, salary, job type, city) */}

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Thành phố
                </label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {/* Options for city */}
                    <option value="hanoi">Hà Nội</option>
                    <option value="hochiminh">Hồ Chí Minh</option>
                    {/* ... */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>


              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Năm kinh nghiệm
                </label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {/* Options for city */}
                    <option value="hanoi">1 Năm</option>
                    {/* ... */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Mức lương
                </label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {/* Options for city */}
                    <option value="hanoi">30 triệu - 50 triệu</option>
                    {/* ... */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>


              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Loại hình công việc
                </label>
                <div className="relative">
                  <select
                    id="city"
                    name="city"
                    className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {/* Options for city */}
                    <option value="hochiminh">Full-time</option>
                    {/* ... */}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Add more filters as needed */}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobByCities;
