import { UserRole } from 'types/enums/userRoles';
import { RoleUrl } from 'types/enums/roleUrls';
import User from '../types/user';

export const copyToClipboard = (text: string) => {
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

// Формироание имен классов по БЭМ
export const bem =
  (block: string, elementPrefix: string = '__', modifyPrefix: string = '_') =>
  (element?: string, modify?: Record<string, boolean>): string => {
    const el = element ? `${elementPrefix}${element}` : '';
    const modifications = modify
      ? Object.keys(modify)
          .filter(key => modify[key])
          .map(item => `${modifyPrefix}${item}`)
      : [];
    return [el ? `${block}${el}` : block, ...modifications.map(item => `${block}${el}${item}`)]
      .join(' ')
      .trim();
  };

export const emptyFunction = () => {};

export const getHumanFileSize = (bytes: number, si = true, dp = 1) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' Б';
  }

  const units = si
    ? ['КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ']
    : ['КиБ', 'МиБ', 'ГиБ', 'ТиБ', 'ПиБ', 'ЭиБ'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return bytes.toFixed(dp) + ' ' + units[u];
};

export const getRole = (path = '') =>
  path.includes('admin')
    ? UserRole.Administrator
    : path.includes('user')
    ? UserRole.User
    : UserRole.User;

export const getRoleUrlFromUrl = (path: string) => {
  const role = path.includes('admin')
    ? UserRole.Administrator
    : path.includes('user')
    ? UserRole.User
    : UserRole.User;
  return RoleUrl[role];
};

export const downloadFile = (url: string, name: string) => {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.target = '_blank';
  a.click();
  a.remove();
};

export const getUserFullName = (user: User.UserInfo): string => {
  return `${user.lastName} ${user.firstName} ${user.middleName}`;
};

export const getFirstLetter = (word: string) =>
  word
    ?.trim()
    .split(' ')
    .map(n => n[0])
    .join('.');
