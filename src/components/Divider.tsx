import React from 'react';
import { bem } from '../utils/helper';
import { BaseComponentProps } from '../types/props';

const b = bem('divider');

interface Props extends BaseComponentProps {}

export const Divider: React.FC<Props> = ({ className }) => <hr className={`${b()} ${className}`} />;
