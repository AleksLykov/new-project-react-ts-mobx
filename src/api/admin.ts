import { ApiService } from '../utils/apiService';
import Resource from 'types/resources';

/**
 *
 */
export const createComment = async (
  id: string | number,
  text: string,
): Promise<Resource.Comment> => {
  const { data } = await ApiService('adminUrl').post(`/resources/${id}/admin-comments/`, {
    comment: text,
  });
  return data;
};
