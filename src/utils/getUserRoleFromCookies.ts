import { Cookies } from 'react-cookie';

export function getUserRoleFromCookies() {
  const cookies = new Cookies();
  const user = cookies.get('user');
  const userRoleCookies = user?.role;
  return userRoleCookies;
}
