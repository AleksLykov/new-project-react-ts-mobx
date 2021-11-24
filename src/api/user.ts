import { ApiService } from '../utils/apiService';
import User from '../types/user';
import { AnyObject, Page } from '../types/common';

export const getAllUsersRaw = async (organizationId?: number): Promise<Page<User.UserInfo>> => {
  const params = new URLSearchParams([['filter', `EQ,organization,${organizationId}`]]);
  const { data } = await ApiService('usersUrl').get('/', { params });
  return data;
};

export const getAllUsers = async (organizationId?: number): Promise<AnyObject[]> => {
  const data = await getAllUsersRaw(organizationId);
  return data.content.map(item => ({
    label: `${item.lastName} ${item.firstName} ${item.middleName}`,
    id: item.id,
  }));
};

export const getUser = async (id: number | string): Promise<User.UserInfo> => {
  const { data } = await ApiService('usersUrl').get(`/${id}/`);
  return data;
};
