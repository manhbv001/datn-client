import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100  py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Về Chúng Tôi</h3>
          <p className="text-sm ">
            Chúng tôi cung cấp nền tảng tuyển dụng hàng đầu để kết nối nhà tuyển
            dụng và người tìm việc.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
          <ul className="text-sm">
            <li>
              <a className="" href="/jobs">
                Việc làm
              </a>
            </li>
            <li>
              <a className="" href="/employers">
                Nhà tuyển dụng
              </a>
            </li>
            <li>
              <a className="" href="/about">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a className="" href="/contact">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
          <ul className="text-sm">
            <li>
              <a className="" href="/faq">
                FAQs
              </a>
            </li>
            <li>
              <a className="" href="/contact">
                Liên hệ chúng tôi
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Theo Dõi Chúng Tôi</h3>
          {/* Thêm các biểu tượng mạng xã hội hoặc thông tin liên lạc khác */}
          <div className="flex space-x-4">
            <a href="#" className=" hover:text-gray-300">
              <Image
                src="/datn-logo.png"
                width={80}
                height={80}
                alt="DATN logo"
              />
            </a>
            {/* Thêm các biểu tượng mạng xã hội khác */}
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-100" />
      <div className="container mx-auto text-center">
        <p className="text-sm ">
          © 2024 Manh Bui. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
