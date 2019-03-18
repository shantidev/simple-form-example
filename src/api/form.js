import { apiStatic } from './index';

export async function getFormData() {
  const data = await apiStatic.get('/json/user.json');
  return data.data[0].results;
}