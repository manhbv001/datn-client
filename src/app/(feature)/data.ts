import authServices from '@/services/auth.service';

export const HEADER_MENU = [
  {
    label: 'Việc làm',
    path: '/viec-lam',
    target: null,
    subItems: [
      {
        label: 'Việc làm IT',
        path: '/viec-lam-it',
        target: 'viec-lam-it',
      },
      {
        label: 'Việc làm Marketing',
        path: '/viec-lam-marketing',
        target: 'viec-lam-marketing',
      },
      {
        label: 'Việc làm Marketing',
        path: '/viec-lam-marketing',
        target: 'viec-lam-marketing',
      },
      {
        label: 'Việc làm tại Hà Nội',
        path: '/viec-lam-ha-noi',
        target: 'viec-lam-ha-noi',
      },
      {
        label: 'Việc làm tại Hồ Chí Minh',
        path: '/viec-lam-ha-noi',
        target: 'viec-lam-ha-noi',
      },
    ],
  },
  {
    label: 'Công ty',
    path: '/posts',
    target: 'posts',
    subItems: [
      {
        label: 'Danh sách công ty',
        path: '/danh-sach-cong-ty',
        target: 'danh-sach-cong-ty',
      },
      {
        label: 'Công ty top đầu',
        path: '/top-cong-ty',
        target: 'top-cong-ty',
      },
    ]
  },
  {
    label: 'Ứng viên',
    path: '/about-us',
    target: 'about-us',
  },
  {
    label: 'Mẫu CV',
    path: '/about-us',
    target: 'about-us',
  },
  {
    label: 'Khám phá',
    path: '/about-us',
    target: 'about-us',
  },
  {
    label: 'Tài khoản',
    path: '/about-us',
    target: 'about-us',
  },
];

export const ACCOUNT_MENU = [
  {
    label: 'CMS',
    path: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/admin-auth`,
    // path: '/coming-soon',
  },
  {
    label: 'Feedback',
    path: '/feedback',
  },
  {
    label: 'Đăng xuất',
    path: '/sign-in',
    isLgout: true,
    action: authServices.logout,
  },
];

export const FOOTER_DATA = {
  contact: {
    email: 'techomieeees@gmail.com',
    phone: '+84 987654321',
  },
  menu: [
    {
      key: 'footer-posts',
      label: 'Bài viết',
      url: '/posts',
    },
    {
      key: 'footer-articles',
      label: 'Tin tức',
      url: '/articles',
    },
    {
      key: 'footer-about',
      label: 'Giới thiệu',
      url: '/about-us',
    },
    {
      key: 'footer-pp',
      label: 'Chính sách & quyền riêng tư',
      url: '/privacy-policy',
    },
  ],
  socialNetworks: [
    {
      key: 'footer-fb',
      imgSrc: '/icons/facebook.png',
      alt: 'Follow DATN trên Facebook',
      url: 'https://www.facebook.com/DATN',
    },
    {
      key: 'footer-threads',
      imgSrc: '/icons/threads.png',
      alt: 'Follow DATN trên Threads',
      url: 'https://www.threads.net/DATN',
    },
    {
      key: 'footer-youtube',
      imgSrc: '/icons/youtube.png',
      alt: 'Subcribe DATN trên Youtube',
      url: 'https://www.youtube.com/channel/UCob4JFtST3QJnpGeU_gUU8Q',
    },
    {
      key: 'footer-tiktok',
      imgSrc: '/icons/tiktok.png',
      alt: 'Follow DATN trên TikTok',
      url: 'https://www.tiktok.com/@DATN',
    },
  ],
};
