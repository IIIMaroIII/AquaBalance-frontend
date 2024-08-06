import CONSTANTS from 'src/components/Constants/constants.js';
import AxiosWithCredentials from './axios';

export const requestTotalUsers = async () => {
  const {
    data: {
      data: { totalUsers },
    },
  } = await AxiosWithCredentials.get(CONSTANTS.USERS_ENDPOINTS.totalUsers);
  return totalUsers;
};
