const dayjs = require('dayjs');
require('dayjs/locale/vi');

const formattedDate = (string: string) => {
  return dayjs(string).locale('vi').format('HH:mm ddd, DD/MM/YYYY');
};

const datetime = {
  formattedDate,
};

export default datetime;
