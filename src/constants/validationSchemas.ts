import * as Yup from 'yup';
import {
  arrayFilesMin,
  numberMoreThanOrEqual,
  numberRequired,
  objectRequired,
  stringRequired,
} from './yupValidations';
import { ErrorText } from '../types/enums/errorTexts';

export const createTRValidationSchema = Yup.object().shape({
  name: stringRequired(),
  type: objectRequired(),
  price: numberRequired(),
  minPrice: numberMoreThanOrEqual('price', 'Значение не может быть меньше указанного порога'),
  resultPrice: numberRequired().min(0.01, ErrorText.wrongPrice),
  code: objectRequired(),
  requiredDocuments: arrayFilesMin(2),
  photos: arrayFilesMin(1, 'файл'),
});
