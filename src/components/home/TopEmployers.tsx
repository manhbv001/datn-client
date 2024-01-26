const TopEmployers = () => {
  const employersData = [
    {
      id: 1,
      logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ0pQmiiMjCm43BCO8-khg3veXFgFJctQARMTAX1A=s900-c-k-c0x00ffffff-no-rj',
      name: 'ABC Company',
    },
    {
      id: 2,
      logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ0pQmiiMjCm43BCO8-khg3veXFgFJctQARMTAX1A=s900-c-k-c0x00ffffff-no-rj',
      name: 'XYZ Corporation',
    },
    {
      id: 3,
      logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ0pQmiiMjCm43BCO8-khg3veXFgFJctQARMTAX1A=s900-c-k-c0x00ffffff-no-rj',
      name: 'Tech Innovators',
    },
    {
      id: 4,
      logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ0pQmiiMjCm43BCO8-khg3veXFgFJctQARMTAX1A=s900-c-k-c0x00ffffff-no-rj',
      name: 'Global Solutions',
    },
    {
      id: 5,
      logo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQ0pQmiiMjCm43BCO8-khg3veXFgFJctQARMTAX1A=s900-c-k-c0x00ffffff-no-rj',
      name: 'Infinite Future',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
          <h3 className="text-xl">Nhà tuyển dụng hàng đầu</h3>
          <a href="#" className="hover:underline text-white text-sm">
            Xem thêm
          </a>
        </div>

        <div className="bg-white p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {employersData.map((employer) => (
              <div
                key={employer.id}
                className="bg-white p-4 rounded shadow-md text-center"
              >
                <img
                  src={`${employer.logo}`}
                  alt={employer.name}
                  className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
                />
                <a href="/" className="text-lg font-semibold text-[var(--primary-color)]">{employer.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopEmployers;
