import { ApiService } from '../utils/apiService';
// import { AnyObject, FileInfo, Page } from '../types/common';
import Resource from 'types/resources';
import { RoleUrl } from 'types/enums/roleUrls';

/* ------------------------------ SECTION ------------------------------ */

/**
 *
 */
export const getResource = async (
  id: number | string,
  roleUrl = RoleUrl.user,
): Promise<Resource.Item> => {
  const { data } = await ApiService(roleUrl).get<Resource.Item>(`/resources/${id}`);
  return data;
};

/**
 *
 */
export const updateResource = async (
  id: string | number,
  params: Resource.RqstUpdateItem,
  roleUrl = RoleUrl.user,
): Promise<Resource.Item> => {
  const { data } = await ApiService(roleUrl).put(`/resources/${id}`, params);
  return data;
};

/**
 *
 */
export const deleteResource = async (
  id: string | number,
  roleUrl = RoleUrl.user,
): Promise<Resource.Item> => {
  const { data } = await ApiService(roleUrl).delete(`/resources/${id}`);
  return data;
};
