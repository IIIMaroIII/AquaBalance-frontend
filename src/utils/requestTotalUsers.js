import axios from 'axios';
import CONSTANTS from 'src/components/Constants/constants.js';

export const requestTotalUsers = async () => {
  const {
    data: {
      data: { totalUsers },
    },
  } = await axios.get(
    `${CONSTANTS.DOMAINS.SERVER_DEPLOY}${CONSTANTS.USERS_ENDPOINTS.totalUsers}`,
  );
  return totalUsers;
};
