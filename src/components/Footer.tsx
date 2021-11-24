/**
 * Description of the page
 */
import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
// local
import { BaseComponentProps } from 'types/props';
// import { bem } from 'utils/helper';

// const b = bem('footer');

const FooterPage: React.FC<BaseComponentProps> = () => {
  return (
    <Fragment>
      <div>Footer</div>
    </Fragment>
  );
};

export const Footer = inject('store')(observer(FooterPage));
