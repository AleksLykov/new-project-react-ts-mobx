import moment from 'moment';

export const getFormattedDate = (date: Date | string | null | undefined, divider = '.') => {
  return date ? moment(date).format(`DD${divider}MM${divider}YYYY`) : undefined;
};

export const getFormattedUSDate = (date: Date | string | null | undefined, divider = '-') => {
  return date ? moment(date).format(`YYYY${divider}MM${divider}DD`) : undefined;
};

export const dateToTimestamp = (date: Date | string | null | undefined) => {
  return date ? moment(date).format('YYYY-MM-DD HH:mm:ss.SSS') : undefined;
};

export const stringDateToDate = (value: string | undefined | null) =>
  moment(value, 'DD.MM.YYYY').toDate();
