import api from './config';

export const getAllLists = async () => {
  const resp = await api.get('/lists');
  return resp.data
};

export const getOneList = async (id) => {
  const resp = await api.get(`/lists/${id}`);
  return resp.data;
};

export const postList = async (listData) => {
  const resp = await api.post('/lists', { list: listData });
  return resp.data;
};

export const putList = async (id, listData) => {
  const resp = await api.put(`/lists/${id}`, { list: listData });
  return resp.data;
};

export const deleteList = async (id) => {
  const resp = await api.delete(`/lists/${id}`);
  return resp;
};




