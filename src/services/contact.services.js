import API from '@/api/services';

export const listContacts = () => {
  return API.get('/users');
};
