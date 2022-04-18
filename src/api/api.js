import * as axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a55a91b6-7d1b-4df9-8004-ea38b09a9519',
  },
});

export const authAPI = {
  getAuthUserData() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(activePage = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${activePage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(profileId) {
    return instanse
      .get(`profile/${profileId}`)
      .then((response) => response.data);
  },
  getStatus(profileId) {
    return instanse
    .get(`profile/status/${profileId}`)
  },
  updateStatus(status) {
    return instanse
    .put(`profile/status`, {status})
  },
};

export const followAPI = {
  deleteFollow(id) {
    return instanse.delete(`follow/${id}`).then((response) => response.data);
  },
  postFollow(id) {
    return instanse.post(`follow/${id}`).then(response => response.data);
  },
};
