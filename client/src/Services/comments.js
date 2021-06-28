import api from './config'

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data;
};

export const postComment = async (id, commentData) => {
  const resp = await api.post(`/lists/${id}/comments`, { comment: commentData });
  return resp.data
};