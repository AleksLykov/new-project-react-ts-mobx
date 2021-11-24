import { ErrorText } from '../types/enums/errorTexts';
import * as yup from 'yup';

export const stringRequired = (text?: string) =>
  yup
    .string()
    .nullable()
    .required(text ?? ErrorText.required);

export const objectRequired = (text?: string) =>
  yup
    .object()
    .nullable()
    .required(text ?? ErrorText.required);

export const numberRequired = (text?: string) =>
  yup
    .number()
    .nullable()
    .required(text ?? ErrorText.required);

export const arrayFilesMin = (min: number, endText: string = 'файла') =>
  yup.array().min(min, params => `Требуется минимум ${params.min} ${endText}`);

export const url = () =>
  yup
    .string()
    .matches(
      /^((ft|htt)ps?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%@_.~+&:]*)*(\?[;&a-z\d%@_.,~+&:=-]*)?(#[-a-z\d_]*)?$/i,
      ErrorText.wrongUrl,
    );

export const numberMoreThanOrEqual = (refField: string, text: string) =>
  yup.number().nullable().required(ErrorText.required).min(yup.ref(refField), text);
